const persone1 = {
    fullName: function(){
        return this.firsName + " " + this.lastName;
    }
}

const persone2 = {
    lastName: "Khorrami",
    firsName: "Moh3en"
}

let x = persone1.fullName.call(persone2);
console.log(x)