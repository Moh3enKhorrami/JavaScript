/* Compare Dates
Dates can easily be compared.

The following example compares today's date with January 14, 2100: */

let text = "";
const today = new Date();
const Someday = new Date();
Someday.setFullYear(2100, 0, 14);

if (Someday > today){
    text = "Today is before January 14, 2100.";
} else{
    text = "Today is after January 14, 2100.";
}

console.log(text);