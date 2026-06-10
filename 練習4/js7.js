let scores = [80, 90, 70, 100, 85];

let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

let avg = sum / scores.length;

console.log("平均：" + avg);
