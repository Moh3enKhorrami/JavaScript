There’s also a special operator "in" for that.

The syntax is:

"key" in object

----------------------------------------
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

----------------------------------------
اگر ما کوتیشن را حذف کنیم، مانند متغیر فرض می‌شود، پس باید اسم واقعی برای بررسی استفاده شود. برای مثال:

let user = { age: 30 };

let key = "age";
alert( key in user ); // true وجود دارد پس "age" ویژگی

----------------------------------------

آن مورد زمانی است که یک ویژگی شیء موجود باشد، اما undefined را در خود ذخیره کرده باشد:


let obj = {
    test: undefined
  };
  
  alert( obj.test ); // است، پس یعنی چنین متغیری نداریم؟ undefined خروجی
  
  alert( "test" in obj ); // !می‌دهد، بنابراین ویژگی وجود دارد true خروجی