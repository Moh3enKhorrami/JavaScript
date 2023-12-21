const persons = {
    name : "moh3en",
    age : function () {return 30;}, // will not stringify functions
    city : "Ahvaz",
    today: new Date()
};

let myString = JSON.stringify(persons);
console.log(myString);