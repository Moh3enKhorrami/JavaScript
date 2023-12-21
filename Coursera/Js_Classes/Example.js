class Car{
    constructor (name, year){
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car ("Fors", 2013);
const myCar2 = new Car("Audi", 2020);

console.log(myCar1.name + " " + myCar2.name );