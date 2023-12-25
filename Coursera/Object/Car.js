const car = {
    engine : true,
    streering : true,
    speed : "slow"
}
const sportCar =  Object.create(car);
sportCar.speed= "fast";
console.log(sportCar);

for(let x in  sportCar){
    console.log(x)
}

for (let x of Object.keys(sportCar)){
    console.log(x + ":" + sportCar[x])
}