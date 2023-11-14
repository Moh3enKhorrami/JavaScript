There’s also a special operator "in" for that.

The syntax is:

"key" in object

----------------------------------------
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist