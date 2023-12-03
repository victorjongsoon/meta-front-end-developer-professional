// creating object

class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal);

console.log (Animal);

// creating object using new
class Food { /* ...class code here... */ }

var noodle = new Food();

console.log (Food);

// inheritance
class Vehicle { /* ...class code here... */ }
class Car extends Vehicle { /* ...class code here... */ }
class Motorcycle  extends Vehicle { /* ...class code here... */ }


// encalsulation
"abc".toUpperCase(); // when i use .toUpperCase() i don't need to know how it works

// Abstraction
/**
 * An abstraction is about extracting the concept of what you're trying to do, 
 * rather than dealing with a specific manifestation of that concept. 
 * 
 * Encapsulation is about you not having access to, or not being concerned with, 
 * how some implementation works internally.
 */

// polymorphism (multiple forms)
// example 1
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

console.log(bicycle.bell()); // "Ring, ring! Watch out, please!"
console.log(door.bell()); // "Ring, ring! Come here, please!"

// example 2
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
