const persons = {
    name : "moh3en",
    age : 34,
    city : "Ahvaz"
};
let txt = "";
for ( let x in persons){
    txt += persons[x] + " ";
};

console.log(txt);