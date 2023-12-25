class Car {
    constructor(Brand, sal, model2){
        this.Brand = Brand,
        this.sal = sal,
        this.model2 = model2
    }
    displayInfo() {
        console.log(`Car Info: ${this.Brand} ${this.sal} ${this.model2}`)
         }
}

const myCar = new Car ("Toyota", 2022, "Yaris");

myCar.displayInfo();