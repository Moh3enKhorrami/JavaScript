const person = {
    firstName: "Moh3en",
    lastName: "Khorrami",
    id: 5610,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());