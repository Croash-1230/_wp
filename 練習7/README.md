# JavaScript 基礎練習題

這個專案收錄一系列 JavaScript 基礎練習，內容涵蓋：
- 物件操作
- 陣列處理
- callback 函式
- JSON 處理
- 字串處理
- 條件判斷
- 模板字串

---

## 📌 題目清單

### 1. 物件與屬性存取
建立 `post` 物件，並用兩種方式輸出 title：

```javascript
const post = {
  id: 1,
  title: "Hello World",
  content: "Markdown content"
};

console.log(post.title);
console.log(post["title"]);
