const fruits = new Map([
    ["apples",500],
    ["bananas", 300],
    ["oranges", 200],
]);

let txt = "";
for (let x of fruits){
    txt += x + " ";
}

console.log(txt);