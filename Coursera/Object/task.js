function myFunc (theObject){
    theObject.make = "toyota";
}

const myCar = {
    make : "Honda",
    model : "Accord",
    year : 1990,
}

console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);
