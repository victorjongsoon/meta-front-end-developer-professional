const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

fruits.set("apples", 800);

fruits.forEach((value, key) => {
    console.log(`${key} - ${value}`);
});

console.log(fruits.get("apples")); // Returns 500

console.log(fruits.has("apples")); // Returns true

console.log(fruits.size); // Returns 3

fruits.delete("apples"); // Removes "apples" from the Map

console.log(fruits.has("apples")); // Returns false

fruits.clear(); // Removes all key-value pairs from the Map

console.log(fruits.has("oranges")); // Returns true