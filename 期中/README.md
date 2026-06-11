# SHOPLINE 一頁式購物網站

## 專案簡介

一個輕量的一頁式購物網站，前端為單頁應用（SPA），後端使用 Node.js + Express + SQLite 提供 RESTful API。

## 技術架構

| 層級 | 技術 |
|------|------|
| 前端 | HTML + CSS + JavaScript（無框架） |
| 後端 | Node.js + Express 5 |
| 資料庫 | SQLite（better-sqlite3） |

## 專案結構

```
shop/
├── server.js        # Express 伺服器，路由 + 資料庫初始化
├── package.json
├── public/
│   └── index.html   # 前台頁面（SPA）
└── shop.db          # SQLite 資料庫（自動建立）
```

## 資料庫設計

三張資料表：

**products** — 商品資料
| 欄位 | 類型 | 說明 |
|------|------|------|
| id | INTEGER | 主鍵，自動遞增 |
| name | TEXT | 商品名稱 |
| category | TEXT | 分類（服飾/配件/居家） |
| price | INTEGER | 價格 |
| description | TEXT | 商品描述 |
| image_url | TEXT | 圖片網址 |

**orders** — 訂單主表
| 欄位 | 類型 | 說明 |
|------|------|------|
| id | INTEGER | 主鍵，自動遞增 |
| customer_name | TEXT | 顧客姓名 |
| email | TEXT | Email |
| phone | TEXT | 電話 |
| address | TEXT | 收件地址 |
| note | TEXT | 備註 |
| total | INTEGER | 訂單總額 |
| created_at | DATETIME | 建立時間 |

**order_items** — 訂單明細
| 欄位 | 類型 | 說明 |
|------|------|------|
| id | INTEGER | 主鍵 |
| order_id | INTEGER | 訂單 ID（FK → orders） |
| product_id | INTEGER | 商品 ID |
| product_name | TEXT | 商品名稱（快照） |
| price | INTEGER | 單價（快照） |
| qty | INTEGER | 數量 |

## API 規格

### GET /api/products

取得商品列表，支援分類篩選。

```
GET /api/products
GET /api/products?category=服飾
```

回應：
```json
{
  "products": [
    { "id": 1, "name": "簡約棉質T恤", "category": "服飾", "price": 590, "description": "100%純棉，柔軟透氣", "image_url": "..." }
  ]
}
```

### POST /api/orders

建立訂單（寫入 orders + order_items）。

請求：
```json
{
  "customer_name": "王小明",
  "email": "test@email.com",
  "phone": "0912345678",
  "address": "台北市大安區...",
  "note": "",
  "items": [
    { "product_id": 1, "product_name": "簡約棉質T恤", "price": 590, "qty": 2 }
  ]
}
```

回應（201）：
```json
{
  "order_id": 1,
  "total": 1180
}
```

## 啟動方式

```bash
npm start
```

伺服器執行於 `http://localhost:3000`

首次啟動自動建立資料庫並寫入 9 筆種子商品資料。

## 功能列表

- 商品展示：分類篩選（全部 / 服飾 / 配件 / 居家）
- 購物車抽屜：加入 / 刪除 / 修改數量，即時計算總額
- 結帳表單：彈窗填寫訂單資訊，送出後寫入資料庫
- Toast 提示：加入購物車時顯示
- 響應式設計：支援手機與平板
