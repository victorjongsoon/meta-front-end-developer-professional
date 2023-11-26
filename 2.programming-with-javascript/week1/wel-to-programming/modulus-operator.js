var num1 = 2;
var num2 = 5;

var test1 = num1 % 2;
var test2 = num2 % 2;

/**
 * Checks if test1 is not equal to 0.
 * @param {number} test1 - The value to be checked.
 * @returns {boolean} - Returns true if test1 is not equal to 0, otherwise returns false.
 */
var result1 = test1 != 0;
var result2 = test2 != 0;

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);
