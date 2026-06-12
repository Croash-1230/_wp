# 網頁設計學習專案 — 檔案總覽

> 作者：王韋博（金門大學）

---

## 根目錄檔案

| 檔案 | 說明 |
|------|------|
| `練習1.html` | 個人資料網站 — 王韋博自我介紹（19歲、金門大學）HTML+CSS 靜態頁面 |
| `練習2.txt` | 會員註冊表單 HTML — 含姓名、帳號、密碼、Email、生日、性別、興趣、縣市、自我介紹、大頭貼上傳 |
| `練習3.txt` | Hello World — `console.log("Hello, World!")` 入門 |

---

## 練習4 — JavaScript 基礎練習（10題）

| 檔案 | 主題 | 說明 |
|------|------|------|
| `js1.js` | if 條件判斷 | 判斷奇偶數（`%` 餘數運算） |
| `js2.js` | if else if | 成績等級 A/B/C/D/F |
| `js3.js` | for 迴圈 | 1~10 加總 |
| `js4.js` | 巢狀 for | 九九乘法表 |
| `js5.js` | while 迴圈 | 倒數計時器 |
| `js6.js` | function | 階乘計算 n! |
| `js7.js` | Array | 計算平均成績 |
| `js8.js` | Object | 學生物件屬性存取 |
| `js9.js` | Object + Array | 學生清單管理 |
| `js10.js` | JSON | `JSON.parse()` / `JSON.stringify()` |

---

## 練習5 — Next.js 部落格系統（TypeScript + SQLite）

使用 **Next.js 16 + React 19 + SQLite + Tailwind CSS** 開發的部落格平台。

### 主要功能
- **使用者認證** — JWT + bcrypt 密碼加密（`lib/auth.ts`）
- **貼文 CRUD** — 公開貼文列表、個人貼文管理
- **資料庫** — SQLite（`posts` + `users` 兩張表，`lib/db.ts`）

### 目錄結構
| 路徑 | 說明 |
|------|------|
| `app/page.tsx` | 首頁 — 公開貼文列表 |
| `app/layout.tsx` | 根佈局 |
| `app/posts/` | 貼文路由 |
| `app/my-posts/` | 個人貼文管理 |
| `app/login/` | 登入頁 |
| `app/register/` | 註冊頁 |
| `app/users/` | 使用者頁面 |
| `app/api/` | API 路由 |
| `components/Navbar.tsx` | 導覽列 |
| `components/AuthForm.tsx` | 認證表單元件 |
| `components/PostForm.tsx` | 貼文表單元件 |
| `lib/db.ts` | 資料庫初始化與查詢 |
| `lib/auth.ts` | JWT 認證邏輯 |
| `blog.db` | SQLite 資料庫檔案 |

---

## 練習6 — JavaScript Callback 與箭頭函數（10題）

| 檔案 | 主題 | 說明 |
|------|------|------|
| `js1.js` | Callback | `mathTool()` 回呼加法/減法 |
| `js2.js` | IIFE | 立即執行函數、區域作用域 |
| `js3.js` | Arrow Function | `map()` 計算折扣價格 |
| `js4.js` | Reference Type | `pop()` / `unshift()` 修改陣列 |
| `js5.js` | Higher-Order Function | `multiplier()` 回傳函數、Closure |
| `js6.js` | Callback 篩選 | 手動實作 `filter()` |
| `js7.js` | Arrow + Object | `filter()` 篩選物件資料 |
| `js8.js` | Pass by Reference | 修改 vs 重新指定參考 |
| `js9.js` | setTimeout | 非同步延遲執行 |
| `js10.js` | reduce + Callback | 計算總價 + 折扣 |

---

## 練習7 — JavaScript 進階練習（10題）

涵蓋：物件操作、陣列處理、Callback、JSON 處理、字串處理、條件判斷、模板字串。

| 檔案 | 說明 |
|------|------|
| `js1.js` | 物件屬性存取（Dot / Bracket notation） |
| `js2.js` |  |
| `js3.js` |  |
| `js4.js` |  |
| `js5.js` |  |
| `js6.js` |  |
| `js7.js` |  |
| `js8.js` |  |
| `js9.js` |  |
| `js10.js` |  |

---

## 期中專案 — SHOPLINE 一頁式購物網站

> 路徑：`期中/`

全端 SPA 購物網站，前端無框架 HTML+CSS+JS，後端 **Node.js + Express 5 + SQLite**。

### API 規格
| 路由 | 方法 | 說明 |
|------|------|------|
| `/api/products` | GET | 取得商品列表（支援 `?category=` 篩選） |
| `/api/orders` | POST | 建立訂單（含訂單明細） |

### 資料庫設計（`shop.db`）
- **products** — 商品（9 筆種子資料：服飾/配件/居家）
- **orders** — 訂單主表（顧客資訊、總額、時間）
- **order_items** — 訂單明細（FK→orders）

### 功能
- 商品展示 + 分類篩選
- 購物車抽屜（增刪改數量、即時總額）
- 結帳彈窗（寫入資料庫）
- Toast 提示 + RWD 響應式設計

### 啟動方式
```bash
npm start
# → http://localhost:3000
```

---

## 學習路徑總結

```
練習1-3  →  HTML/CSS 基礎 + JavaScript Hello World
練習4    →  JS 基礎語法（if/for/while/function/Array/Object/JSON）
練習6    →  Callback / 箭頭函數 / 高階函數 / 非同步
練習7    →  進階 JS 應用（物件、陣列、回呼、JSON）
練習5    →  Next.js 全端部落格（TypeScript + 認證 + SQLite）
期中     →  購物網站全端實戰（Express + SQLite + SPA）
```
