همچنین ما می‌توانیم از متد Object.assign برای این کار استفاده کنیم.

سینتکس آن اینگونه است:

Object.assign(dest, ...sources)
اولین آرگومان dest همان شیء مقصود است.
آرگومان‌های بعدی src1, ..., srcN (ممکن است هر تعدادی باشد) شیءها منبع هستند.
این متد ویژگی‌های تمام شیءها منبع src1, ..., srcN را درون dest کپی می‌کند. به عبارتی دیگر، ویژگی‌های تمام آرگومان‌های بعد از دومین آرگومان، درون شیء اول کپی می‌شوند.
متد صدازده شده dest را برمی‌گرداند.

-------------------------------------

let user ={
    name : "Moh3en",
    age: 34,
};

let clone = {}; // شیء خالی جدید

for ( let key in user){
    clone[key] = user[key];
}

clone.name = "Jefri"; // تغییر دادن داده‌ی درون آن

alert( user.name); // است John هنوز در شیء اصلی برابر با

----------------------------

use Object.assign

let target = {a: 0, b: 2};
let source = {b: 4, c: 2};

let returnnedtarget = Object.assign(target, source);

alert(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

alert(returnnedtarget == target);
// Expected output: true

----------------------------------------

let user = {name: "moh3en"};

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1,permissions2);

alert(user.name); // moh3en
alert(user.canEdit); // true
alert(user.canView); // true


---------------------------------------
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // user = { name: "Pete" } :حالا داریم

-------------------------------------------
