# 對話紀錄

## 2026-06-11

### 1. 初始需求 — 建立類似 Threads.com 的網站

**使用者要求**：幫我寫一個類似 threads.com 的網站  
**技術棧確認**：Next.js + Tailwind + Prisma → 後來改用 better-sqlite3  
**資料庫**：SQLite  
**功能選定**：使用者註冊/登入、發文/留言、按讚功能、時間軸/Feed

### 2. 需求變更 — 改為簡易網誌系統

**使用者要求**：請用 node.js + sqlite 寫一個簡易網誌系統 放在blog下  
**實作方式**：Next.js API Routes（已安裝）  
**完成內容**：文章 CRUD、SQLite 儲存、Tailwind UI

### 3. 加入登入系統

**使用者要求**：幫我增加登入系統  
**實作方式**：JWT（jose）+ bcryptjs + httpOnly cookie  
**完成內容**：註冊/登入/登出、session 管理、受保護路由

### 4. 連線問題

**使用者回報**：我連不上  
**原因**：Dev server 在工具端被 timeout 終止、AppLocker 政策阻擋背景程序  
**解決**：更新 package.json scripts 加入 `--webpack`，告知使用者手動執行 `npm run dev`

### 5. 增加個人貼文區與公共貼文區

**使用者要求**：增加個人貼文區跟公共貼文區  
**完成內容**：posts 表加入 userId、公開時間軸（`/`）、個人貼文區（`/my-posts`）、API 支援 `?author=me` 過濾

### 6. 作者連結

**使用者要求**：點了發文者貼文上顯示的帳號連結，應該要能進入發文者的版面  
**完成內容**：建立 `/users/[id]` 使用者個人頁面、作者名稱改為可點擊 Link

### 7. 記錄對話

**使用者要求**：請你將我們的對話全部記錄在 _doc 下  
**完成內容**：建立 `_doc/development-log.md` 和 `_doc/conversation-log.md`
