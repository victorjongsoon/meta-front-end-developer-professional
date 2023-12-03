// Functional Programming
var shoes = 100;
var tax = 1.2;

function totalPrice(price, tax) {
    var calculation = price * tax;
    console.log('Total Price: ', calculation);
}

totalPrice(shoes, tax); // Total Price: 120


// OOP
var purchase1 = {
    name: "TV",
    price: 500,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.price * purchase1.stateTax;
        console.log('Total Price: ', calculation);
    }   
}

console.log(purchase1.name); // TV
console.log(purchase1.price); // 500
console.log(purchase1.stateTax); // 1.2
purchase1.totalPrice(); // Total Price: 600

var purchase2 = {
    name: "Laptop",
    price: 1000,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.price * this.stateTax;
        console.log('Total Price: ', calculation);
    }   
}

console.log(purchase2.name); // Laptop
console.log(purchase2.price); // 1000
console.log(purchase2.stateTax); // 1.2
purchase2.totalPrice(); // Total Price: 1200