const letters = new Set(["a", "b", "c"]);
let text = "";
letters.forEach(function(value){
    text += value + " ";
});

console.log(text);