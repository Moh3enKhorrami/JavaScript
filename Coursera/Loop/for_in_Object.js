/*
for (key in object) {
  // code block to be executed
}
*/

const person = {fname : "Ali", lname : "Khorrami", age: 42}

let text = "";
for (let x in person){
    text += person[x] + " ";
}
console.log(text);

/*
Example Explained
The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]
*/