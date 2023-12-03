/*
high order function
higher-order function either accepts functions as parameters, 
returns a function, or both
*/


function specificNum() {
    return 42;
}

function randomNum() {
    return Math.random() * 10; // Returns a random number between 0 and 10
}

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number