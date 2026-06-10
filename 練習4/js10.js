let jsonText = `
{
    "name":"小明",
    "age":18,
    "city":"高雄"
}
`;

let person = JSON.parse(jsonText);

console.log(person.name);
console.log(person.age);
console.log(person.city);
