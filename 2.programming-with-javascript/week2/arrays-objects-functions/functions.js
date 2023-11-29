// add two numbers
var a = 10;
var b = 20;
var c = a + b;
console.log(c);

// add two numbers using function
function addtwoNums() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
// call the function    
addtwoNums();

// add two numbers using function with parameters
function addTwoNumbers(a, b) { // (a, b) parameters
    var c = a + b;
    console.log(c);
}
// call the function
addTwoNumbers(10, 20); // (10, 20) arguments
addTwoNumbers(100, 200);