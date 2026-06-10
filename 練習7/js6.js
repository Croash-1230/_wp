const jsonStr = '{"title": "Post 1", "tags": ["js", "node"]}';

// JSON 轉物件
let obj = JSON.parse(jsonStr);

// 印出 tags 第二個元素
console.log(obj.tags[1]);
