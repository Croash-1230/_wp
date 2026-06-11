const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = new Database(path.join(__dirname, 'shop.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price INTEGER NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT NOT NULL,
    note TEXT DEFAULT '',
    total INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    product_name TEXT NOT NULL,
    price INTEGER NOT NULL,
    qty INTEGER NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
  );
`);

const count = db.prepare('SELECT COUNT(*) as cnt FROM products').get();
if (count.cnt === 0) {
  const insert = db.prepare(
    'INSERT INTO products (name, category, price, description, image_url) VALUES (?, ?, ?, ?, ?)'
  );
  const seed = [
    ['簡約棉質T恤', '服飾', 590, '100%純棉，柔軟透氣', 'https://picsum.photos/seed/tshirt/400/400'],
    ['質感帆布袋', '配件', 390, '加厚帆布，大容量設計', 'https://picsum.photos/seed/bag/400/400'],
    ['陶瓷馬克杯', '居家', 320, '手工製作，簡約霧面', 'https://picsum.photos/seed/mug/400/400'],
    ['輕薄防風外套', '服飾', 1280, '防潑水材質，輕量好攜帶', 'https://picsum.photos/seed/jacket/400/400'],
    ['真皮短夾', '配件', 890, '頭層牛皮，極簡薄型', 'https://picsum.photos/seed/wallet/400/400'],
    ['北歐風檯燈', '居家', 720, '暖黃光，護眼無藍光', 'https://picsum.photos/seed/lamp/400/400'],
    ['寬鬆亞麻襯衫', '服飾', 980, '天然亞麻，透氣舒適', 'https://picsum.photos/seed/linen/400/400'],
    ['不鏽鋼保溫瓶', '居家', 450, '真空雙層，保溫12小時', 'https://picsum.photos/seed/bottle/400/400'],
    ['編織草帽', '配件', 550, '手工編織，夏日必備', 'https://picsum.photos/seed/hat/400/400'],
  ];
  const tx = db.transaction(() => {
    for (const s of seed) insert.run(...s);
  });
  tx();
}

app.get('/api/products', (req, res) => {
  try {
    const { category } = req.query;
    let rows;
    if (category && category !== 'all') {
      rows = db.prepare('SELECT * FROM products WHERE category = ? ORDER BY id').all(category);
    } else {
      rows = db.prepare('SELECT * FROM products ORDER BY id').all();
    }
    res.json({ products: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/orders', (req, res) => {
  try {
    const { customer_name, email, phone, address, note, items } = req.body;

    if (!customer_name || !email || !phone || !address) {
      return res.status(400).json({ error: '請填寫必填欄位' });
    }
    if (!items || items.length === 0) {
      return res.status(400).json({ error: '購物車為空' });
    }

    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    const result = db.transaction(() => {
      const order = db.prepare(
        'INSERT INTO orders (customer_name, email, phone, address, note, total) VALUES (?, ?, ?, ?, ?, ?)'
      ).run(customer_name, email, phone, address, note || '', total);

      const insertItem = db.prepare(
        'INSERT INTO order_items (order_id, product_id, product_name, price, qty) VALUES (?, ?, ?, ?, ?)'
      );
      for (const item of items) {
        insertItem.run(order.lastInsertRowid, item.product_id, item.product_name, item.price, item.qty);
      }
      return order.lastInsertRowid;
    })();

    res.status(201).json({ order_id: result, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
