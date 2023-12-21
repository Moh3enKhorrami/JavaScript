function Icecream(flavor){
    this.flavor = flavor;
    this.meltIt = function(){
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

// Now I can make as many icecreams as I want:

let kiwiIcecream = new Icecream("Kiwi");
let appleIcecream = new Icecream("apple");

kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}