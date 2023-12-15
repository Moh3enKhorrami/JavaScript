function person (first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new person("Hossein", "Khorrami", 65, "Green");
console.log(myFather.lastName);