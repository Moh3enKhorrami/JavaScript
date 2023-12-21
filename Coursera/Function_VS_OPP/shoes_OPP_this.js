var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log('total preice:', calculation);
    }
}
purchase1.totalPrice(); //120

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this .stateTax;
        console.log('total preice:', calculation);
    }
}
purchase2.totalPrice(); //60