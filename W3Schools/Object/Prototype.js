function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  Person.prototype.nationality = "Persian";

  const myFather = new Person ("Ali", "Khorrami", 40, "green");
  console.log(myFather.nationality);