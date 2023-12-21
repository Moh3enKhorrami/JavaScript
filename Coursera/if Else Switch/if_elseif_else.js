let greeting;
let time = new Date().getHours();
if (time <  10){
    greeting = "Good morning";
}else if (time < 20){
    greeting = "Good Day";
}else{
    greeting = "Good evening";
}

console.log(greeting);