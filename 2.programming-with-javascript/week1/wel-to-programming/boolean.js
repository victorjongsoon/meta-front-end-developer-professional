console.log(1 < 2); // true
var score = 100;
var scoreString = "100";

console.log(score == 100); // true
console.log(score === 100); // true
// === is strict equality operator (type and value)
console.log(score === scoreString); // false
console.log(score == scoreString); // true