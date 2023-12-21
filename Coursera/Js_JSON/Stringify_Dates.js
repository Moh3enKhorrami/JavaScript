const persons = {
    name : "moh3en",
    age : 34,
    city : "Ahvaz",
    today: new Date()
};

let myString = JSON.stringify(persons);
console.log(myString);