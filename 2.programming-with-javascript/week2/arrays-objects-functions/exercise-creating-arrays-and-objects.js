// Task 1: Create a new empty array literal and assign it to the variable clothes.
var clothes = [];

// Task 2: Add 5 favorite items of clothing as strings using the push() method.
clothes.push("T-shirt", "Jeans", "Sneakers", "Hoodie", "Hat");

// Task 3: Remove the fifth piece of clothing from the array using the pop() method.
clothes.pop();

// Task 4: Add a new piece of clothing using the push() method.
clothes.push("Jacket");

// Task 5: Use console.log to show the third item from the clothes array in the console.
console.log(clothes[2]);

// Task 6: Create a new empty object literal and assign it to the variable favCar.
var favCar = {};

// Task 7: Using the dot notation, assign a color property to the favCar object.
favCar.color = "Blue";

// Task 8: Using the dot notation, assign a convertible property to the favCar object.
favCar.convertible = true;

// Task 9: Use the console to log the entire favCar object.
console.log(favCar);

// solution 1
var clothes = [];
clothes.push('gray t-shirt'); // 1st item of clothing
clothes.push('blue t-shirt'); // 2nd item of clothing
clothes.push('yellow t-shirt'); // 3rd item of clothing
clothes.push('slippers'); // 4th item of clothing
clothes.push('old jeans'); // 5th item of clothing
clothes.pop();
clothes.push('green scarf');
console.log(clothes[2]);


// solution 2
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);

