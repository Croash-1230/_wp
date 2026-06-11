# 對話紀錄

## 2026-06-11

### 1. 建立一頁式購物網站（純前端）

建立了 `index.html`，包含：
- 商品展示（9 筆寫死在 JS 中）
- 分類篩選
- 購物車抽屜（加入/刪除/修改數量）
- 結帳彈窗（alert 顯示明細）
- 響應式設計

### 2. 改為 Node.js + SQLite 後端

將專案改為前後端分離架構：

**後端** (`server.js`)
- Express 5 + better-sqlite3
- 三張資料表：`products`、`orders`、`order_items`
- API：`GET /api/products`、`POST /api/orders`
- 首次啟動自動建立資料庫 + 寫入 9 筆種子資料

**前端** (`public/index.html`)
- 改為從 `/api/products` 取得商品資料
- 結帳改為 POST `/api/orders` 寫入資料庫

### 3. 修正商品圖片與名稱不符

因 picsum.photos 產生的是隨機照片，與商品無關。改為內嵌 SVG 方式，每個商品顯示對應 emoji 與名稱：
- 👕 ☕ 🧥 👜 👛 💡 👔 🧴 👒
- 每個商品有獨立色票，圖片即為 emoji + 品名，保證一致

### 4. 撰寫專案說明文件

建立 `README.md`，記錄專案架構、資料庫設計、API 規格、啟動方式。

### 5. 紀錄對話

建立本檔案 `CHATLOG.md`。
