# JavaScript 基礎練習題

本專案包含 10 個 JavaScript 基礎練習題，涵蓋條件判斷、迴圈、函式、陣列、物件及 JSON 等重要概念，適合初學者練習。

---

## 學習目標

完成本練習後，你將能夠：

* 使用 `if` 進行條件判斷
* 使用 `for` 與 `while` 迴圈
* 建立及呼叫 `function`
* 操作 `Array`
* 建立與存取 `Object`
* 使用 `JSON.parse()` 與 `JSON.stringify()`
* 結合多種語法完成小型程式

---

## 練習題目

### 練習 1：判斷奇偶數

**主題：** if

判斷一個數字是奇數還是偶數。

**學習重點：**

* if / else
* 餘數運算 `%`

---

### 練習 2：成績等級判斷

**主題：** if else if

根據成績顯示 A、B、C、D、F 等級。

**學習重點：**

* 多重條件判斷
* 邏輯比較運算

---

### 練習 3：1~10 加總

**主題：** for

利用 for 迴圈計算 1 到 10 的總和。

**學習重點：**

* for 迴圈
* 累加運算

---

### 練習 4：九九乘法表

**主題：** 巢狀 for

使用雙層 for 迴圈產生九九乘法表。

**學習重點：**

* 巢狀迴圈
* 數學運算

---

### 練習 5：倒數計時器

**主題：** while

利用 while 迴圈完成倒數計時。

**學習重點：**

* while 迴圈
* 遞減運算

---

### 練習 6：階乘計算

**主題：** function

建立函式計算 n!。

**學習重點：**

* function 宣告
* return 回傳值

範例：

5! = 120

---

### 練習 7：計算平均成績

**主題：** Array

利用陣列儲存成績並計算平均值。

**學習重點：**

* Array
* length 屬性
* 迴圈存取陣列

---

### 練習 8：學生物件

**主題：** Object

建立學生物件並顯示屬性資料。

**學習重點：**

* Object
* 屬性存取

範例：

```javascript
let student = {
    name: "小明",
    age: 18,
    score: 95
};
```

---

### 練習 9：學生清單管理

**主題：** Object + Array

使用物件陣列儲存多位學生資料。

**學習重點：**

* 陣列中的物件
* 迴圈讀取資料

範例：

```javascript
[
    { name: "小明", score: 90 },
    { name: "小華", score: 80 }
]
```

---

### 練習 10：JSON 資料處理

**主題：** JSON

練習 JSON 與 JavaScript 物件的轉換。

**學習重點：**

* JSON.parse()
* JSON.stringify()

範例：

```javascript
let jsonText = '{"name":"小明","age":18}';
let person = JSON.parse(jsonText);
```

---

## 綜合挑戰題

建立一個「學生成績管理系統」。

### 功能需求

1. 使用 Array 儲存學生資料
2. 使用 Object 表示學生
3. 使用 Function 計算平均成績
4. 使用 For 顯示所有學生
5. 使用 If 判斷及格與否
6. 使用 JSON 輸出結果

### 範例輸出

```text
小明 85 及格
小華 55 不及格
小美 92 及格

平均成績：77.3
```

---

## 執行方式

### 使用 Node.js

```bash
node hello.js
```

### 使用瀏覽器

將 JavaScript 程式放入 HTML 檔案：

```html
<script src="app.js"></script>
```

然後使用瀏覽器開啟即可執行。

---

## 技術內容

* JavaScript ES6
* if / else
* for
* while
* function
* Array
* Object
* JSON

---

## 作者

JavaScript 基礎練習題範例

適合程式設計初學者學習與練習。
