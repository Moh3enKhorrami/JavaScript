// letters.values()   // Returns [object Set Iterator]

const letters = new Set(["a", "b", "c"]);
let text = "";
for (const x of letters.values()){
    text += x + " ";
}

console.log(text);
