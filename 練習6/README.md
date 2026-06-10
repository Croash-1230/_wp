# JavaScript Callback 與箭頭函數練習

## 專案簡介

本專案包含 10 個 JavaScript 練習題，內容涵蓋：

* Callback（回呼函數）
* 匿名函數
* IIFE（Immediately Invoked Function Expression）
* Arrow Function（箭頭函數）
* Array 方法（map、filter、reduce）
* Higher-Order Function（高階函數）
* 參數傳遞與參考型別
* setTimeout 非同步執行

適合作為 JavaScript 函數與陣列操作的入門練習。

---

## 題目列表

### 1. Callback 基礎實作

建立 `mathTool()` 函數，透過 Callback 完成加法與減法運算。

**學習重點**

* Callback Function
* 匿名函數

---

### 2. 匿名函數與立即執行 (IIFE)

使用 IIFE 建立區域作用域，避免變數污染全域環境。

**學習重點**

* IIFE
* 區域變數
* Scope

---

### 3. 箭頭函數與陣列轉換

利用 `map()` 與箭頭函數計算商品折扣價格。

**學習重點**

* Arrow Function
* Array.map()

---

### 4. 陣列參數的破壞性修改

透過 `pop()` 與 `unshift()` 修改原始陣列內容。

**學習重點**

* 陣列方法
* Reference Type

---

### 5. 函數回傳函數

建立 `multiplier()`，並回傳新的函數進行倍數計算。

**學習重點**

* Higher-Order Function
* Closure

---

### 6. Callback 篩選器

手動實作類似 JavaScript `filter()` 的功能。

**學習重點**

* Callback
* 陣列遍歷
* 條件判斷

---

### 7. 箭頭函數處理物件

利用 `filter()` 篩選符合條件的物件資料。

**學習重點**

* Object
* Array.filter()

---

### 8. 參數傳址陷阱

了解「修改物件內容」與「重新指定參考」的差異。

**學習重點**

* Pass by Reference
* Reference Type

---

### 9. 延遲執行的 Callback

使用 `setTimeout()` 在指定時間後執行程式。

**學習重點**

* 非同步程式設計
* Callback

---

### 10. 綜合應用：計算總價

利用 `reduce()` 計算總金額，再透過 Callback 套用折扣。

**學習重點**

* Array.reduce()
* Callback
* 函數組合

---

## 執行方式

### 1. 安裝 Node.js

確認已安裝 Node.js：

```bash
node -v
```

### 2. 執行程式

```bash
node filename.js
```

範例：

```bash
node exercise01.js
```

---

## 專案結構

```text
javascript-practice/
│
├── exercise01.js
├── exercise02.js
├── exercise03.js
├── exercise04.js
├── exercise05.js
├── exercise06.js
├── exercise07.js
├── exercise08.js
├── exercise09.js
├── exercise10.js
│
└── README.md
```

---

## 學習目標

完成本專案後，你將能夠：

* 理解 Callback 的運作方式
* 熟悉 Arrow Function 語法
* 使用 map、filter、reduce 處理資料
* 了解 JavaScript 參考型別的特性
* 撰寫簡單的 Higher-Order Function
* 具備基本非同步程式設計能力

---

## 作者

JavaScript 練習專案

Version 1.0

