//Object vs Maps

const fruits = new Map([
    ["Apple", 500],
    ["Banane", 300],
    ["Orange", 200]
]);
 let txt = "";
 fruits.forEach(function(value,key){
    txt += key + ' = ' + value;
 })

 console.log(txt);