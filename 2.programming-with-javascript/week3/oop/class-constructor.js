// Class
class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  turnOn() {
    console.log('Car is starting');
  }
}

const car1 = new Car('red', 100);
console.log(car1.color); // red
console.log(car1.speed); // 100

const car2 = new Car('blue', 200);
console.log(car2.color); // blue
console.log(car2.speed); // 200

// Constructor
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
console.log(kiwiIcecream); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
console.log(appleIcecream); // --> Icecream {flavor: 'apple', meltIt: ƒ}

kiwiIcecream.meltIt(); // --> The kiwi icecream has melted
appleIcecream.meltIt(); // --> The apple icecream has melted

var date = new Date();
console.log(date); // --> 2020-02-15T15:08:09.739Z

var error = new Error("Something went wrong");
console.log(error); // --> Error: Something went wrong at <anonymous>:1:13

var map = new Map();
console.log(map); // --> Map(0) {}

var promise = new Promise(function(resolve, reject) {
    resolve("Success!");
});
console.log(promise); // --> Promise {<fulfilled>: "Success!"}

var set = new Set();
console.log(set); // --> Set(0) {}

var text = new String("Hello World!");
console.log(text); // --> String {"Hello World!"}

var weakset = new WeakSet();
console.log(weakset); // --> WeakSet {}


var weakmap = new WeakMap();
console.log(weakmap); // --> WeakMap {}

