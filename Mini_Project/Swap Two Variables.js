let a = prompt("Enter the first Namber");
let b = prompt("Enter the second Namber");

let temp;
temp = a;
a = b;
b = temp;

console.log(`The Namber of a after swapping: ${a}`);
console.log(`The Namber of b after swapping: ${b}`);