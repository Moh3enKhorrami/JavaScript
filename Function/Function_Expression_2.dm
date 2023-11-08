let age = prompt ("wie alt sind Sie",18);
let welcome;

if(age < 18) {
    welcome = function();{
    alert("Hi");
    };
} else {
    welcome = function();{
    alert("Hallo");
    };
}

welcome();

-----------------------------------------------------
let age = prompt("wie alt sind Sie",18);

let welcome = (age < 18) ?
  function() { alert("Hi!"); } :
  function() { alert("Hallo!"); };

welcome();