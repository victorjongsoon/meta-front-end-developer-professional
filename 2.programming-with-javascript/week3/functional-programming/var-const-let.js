// var keyword (if variable will be reassigned)
/*
var user = 'John';
var user = 'Jane';
var user = 'Bob';

console.log(user); // Bob
*/


// let keyword
/*
// 1
// we CANNOT access a let variable before we declare it
let user;
console.log(user); // undefined

// 2
// let user = "Anna"; // We cannot redeclare a let variable

// 3
// But we can re-assign a let variable
user = "Bob";
console.log(user); // Bob
*/

// const keyword (if variable will not be reassigned)
const user = "Anna";
user = "Bob"; // TypeError: Assignment to constant variable.