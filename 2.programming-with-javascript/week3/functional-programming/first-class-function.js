/*
first class function
functio
functions can be assigned to variables, 
passed as arguments to other functions, 
returned as values from other functions, 
and stored in data structures.
*/

function addTwoNums(a, b) {
    console.log(a + b) // this will print the sum of the two numbers
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
} // returns a random number between 1 and 10

function specificNum() { return 42 }; // returns 42

var useRandom = true; // change this to false to use specificNum

var getNumber; // this variable will store the function

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
} // this assigns the function to the variable

addTwoNums(getNumber(), getNumber()) // this calls the function stored in the variable