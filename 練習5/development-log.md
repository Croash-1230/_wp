# 開發紀錄 — 簡易網誌系統

## 專案概述

使用 Next.js 16 + TypeScript + Tailwind CSS + SQLite 建立的簡易網誌系統，支援使用者註冊/登入、文章 CRUD、公開/個人貼文區。

---

## 第一階段：專案初始化

### 需求
- 類似 Threads.com 的社交平台 → 後來調整為簡易網誌系統
- 技術棧：Next.js + Tailwind + SQLite

### 執行步驟
1. 透過 `winget` 安裝 Node.js v24.16.0
2. 使用 `create-next-app` 初始化專案（TypeScript, Tailwind, App Router）
3. 安裝 `better-sqlite3` 作為 SQLite 驅動
4. 因系統 AppLocker 政策封鎖 Turbopack 原生綁定，改用 `--webpack` 模式建置

### 建立檔案
| 檔案 | 說明 |
|------|------|
| `lib/db.ts` | SQLite 初始化，建立 `posts` 表 |
| `app/api/posts/route.ts` | GET 文章列表 / POST 新增文章 |
| `app/api/posts/[id]/route.ts` | GET / PUT / DELETE 單篇文章 |
| `components/PostForm.tsx` | 共用新增/編輯表單（Client Component） |
| `app/posts/new/page.tsx` | 寫新文章頁面 |
| `app/posts/[id]/page.tsx` | 文章詳情頁面 |
| `app/posts/[id]/edit/page.tsx` | 編輯文章頁面 |
| `app/posts/[id]/DeleteButton.tsx` | 刪除按鈕 |

---

## 第二階段：登入系統

### 需求
- 使用者註冊/登入/登出
- 保護文章 CRUD 操作

### 技術選型
- `bcryptjs` — 密碼加鹽雜湊
- `jose` — JWT token 簽發與驗證
- Session 儲存在 `httpOnly` cookie，7 天過期

### 建立檔案
| 檔案 | 說明 |
|------|------|
| `lib/auth.ts` | JWT 工具（createToken, verifyToken, getSession）、密碼工具（hashPassword, verifyPassword） |
| `app/api/auth/register/route.ts` | 註冊 API（檢查重複、密碼加密、設 cookie） |
| `app/api/auth/login/route.ts` | 登入 API（驗證帳密、設 cookie） |
| `app/api/auth/logout/route.ts` | 登出 API（清除 cookie） |
| `app/api/auth/me/route.ts` | 取得當前登入使用者 |
| `app/login/page.tsx` | 登入頁面 |
| `app/register/page.tsx` | 註冊頁面 |
| `components/AuthForm.tsx` | 共用登入/註冊表單元件 |

### 修改檔案
| 檔案 | 變更 |
|------|------|
| `lib/db.ts` | 新增 `users` 表 |
| `app/layout.tsx` | 改用 `Navbar` 元件 |
| `app/posts/new/page.tsx` | 新增：未登入跳轉 `/login` |
| `app/posts/[id]/edit/page.tsx` | 新增：未登入跳轉 `/login` |
| `app/posts/[id]/page.tsx` | 新增：僅登入者顯示編輯/刪除按鈕 |

---

## 第三階段：個人貼文區與公開貼文區

### 需求
- 公開貼文區（所有人可見）
- 個人貼文區（僅自己可見）
- 貼文綁定作者

### 資料庫變更
- `posts` 表新增 `userId` 欄位（FK → users.id）
- 相容性：已有資料庫自動執行 `ALTER TABLE` 補上欄位

### API 變更
| 路徑 | 變更 |
|------|------|
| `GET /api/posts` | JOIN users 回傳作者名稱 |
| `GET /api/posts?author=me` | 僅回傳當前使用者貼文 |
| `POST /api/posts` | 需登入，自動綁定 `userId` |
| `PUT /api/posts/[id]` | 僅作者可修改，否則 403 |
| `DELETE /api/posts/[id]` | 僅作者可刪除，否則 403 |

### 新增頁面
| 頁面 | 說明 |
|------|------|
| `/my-posts` | 個人貼文區（需登入） |
| `/users/[id]` | 使用者公開個人頁面（顯示該使用者所有貼文） |

### 導航變更
- Navbar 新增「我的文章」連結（僅登入後顯示）
- 首頁與貼文詳情頁的作者名稱改為可點擊連結，指向 `/users/[id]`

---

## 系統已知限制

1. **SWC/Turbopack 被封鎖** — 系統 AppLocker 政策封鎖 `next-swc.win32-x64-msvc.node`，需使用 `--webpack` 參數
2. **背景程序無法持續** — 同一原因導致 `Start-Process` 等背景啟動方式被阻擋，需手動執行 `npm run dev`
3. **無 Markdown 支援** — 文章內容為純文字

## 執行方式

```bash
npm run dev
# 瀏覽器打開 http://localhost:3000
```

## 路由一覽

| 路由 | 權限 | 說明 |
|------|------|------|
| `/` | 公開 | 所有貼文時間軸 |
| `/users/[id]` | 公開 | 使用者個人頁面 |
| `/posts/[id]` | 公開 | 貼文詳情（編輯/刪除僅作者） |
| `/login` | 公開 | 登入 |
| `/register` | 公開 | 註冊 |
| `/posts/new` | 需登入 | 寫新貼文 |
| `/posts/[id]/edit` | 需登入+作者 | 編輯貼文 |
| `/my-posts` | 需登入 | 個人貼文列表 |
