The spec in action
Here in the tutorial we’ll be using the following JavaScript libraries for tests:

Mocha – the core framework: it provides common testing functions including describe and it and the main function that runs tests.
Chai – the library with many assertions. It allows to use a lot of different assertions, for now we need only assert.equal.
Sinon – a library to spy over functions, emulate built-in functions and more, we’ll need it much later.
These libraries are suitable for both in-browser and server-side testing. Here we’ll consider the browser variant.

The full HTML page with these frameworks and pow spec:

<!DOCTYPE html>
<html>
<head>
  <!-- add mocha css, to show results -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
  <!-- add mocha framework code -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
  <script>
    mocha.setup('bdd'); // minimal setup
  </script>
  <!-- add chai -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
  <script>
    // chai has a lot of stuff, let's make assert global
    let assert = chai.assert;
  </script>
</head>

<body>

  <script>
    function pow(x, n) {
      /* function code is to be written, empty now */
    }
  </script>

  <!-- the script with tests (describe, it...) -->
  <script src="test.js"></script>

  <!-- the element with id="mocha" will contain test results -->
  <div id="mocha"></div>

  <!-- run tests! -->
  <script>
    mocha.run();
  </script>
</body>

</html>
The page can be divided into five parts:

The <head> – add third-party libraries and styles for tests.
The <script> with the function to test, in our case – with the code for pow.
The tests – in our case an external script test.js that has describe("pow", ...) from above.
The HTML element <div id="mocha"> will be used by Mocha to output results.
The tests are started by the command mocha.run().







---------------------------------------------------------
مشخصات(spec) در عمل
در دوره آموزشی ما، از کتابخانه های جاوا اسکریپت زیر برای تست(آزمایش) استفاده خواهیم کرد:

Mocha – فریم ورک اصلی: توابع تستی رایج از جمله spec و it و تابع اصلی که تست ها را اجرا می‌کند را ارائه می‌کند.
Chai – کتابخانه ای با توابع فراوان که این اجازه را می دهد تا از بسیاری از توابع مختلف استفاده کنیم، در حال حاضر فقط به assert.equal نیاز داریم.
Sinon – کتابخانه ای برای جاسوسی از توابع، شبیه سازی توابع(built-in) یا همان توابع داخلی و دیگر موارد، بعداً به آن نیاز خواهیم داشت.
این کتابخانه ها هم برای تست داخل مرورگر و هم برای تست سمت سرور مناسب هستند. در اینجا ما نوع مرورگر را در نظر خواهیم گرفت.

صفحه کامل HTML با این فریم ورک ها و pow spec:

<!DOCTYPE html>
<html>
<head>
  <!-- add mocha css, to show results -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
  <!-- add mocha framework code -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
  <script>
    mocha.setup('bdd'); // minimal setup
  </script>
  <!-- add chai -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
  <script>
    // chai has a lot of stuff, let's make assert global
    let assert = chai.assert;
  </script>
</head>

<body>

  <script>
    function pow(x, n) {
      /* function code is to be written, empty now */
    }
  </script>

  <!-- the script with tests (describe, it...) -->
  <script src="test.js"></script>

  <!-- the element with id="mocha" will contain test results -->
  <div id="mocha"></div>

  <!-- run tests! -->
  <script>
    mocha.run();
  </script>
</body>

</html>
صفحه را می توان به پنج بخش تقسیم کرد:

قسمت <head> – برای اضافه کردن کتاب خانه های خارجی و استایل های برای تست.
قسمت <script> با توابعی برای تست, که در مثال ما --با کد pow.
قسمت تست ها – در مثال ما, اسکریپ خارجی test.js که تابع describe("pow", ...) را دارد(مانند مثال بالایی).
المان html مقابل: <div id="mocha"> برای نمایش نتیجه, Mocha از این تگ استفاده میکند.
با کامند(دستور) mocha.run() تست ما شروع میشود.