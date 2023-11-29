// question: 1
var result = null;
console.log(result);

// question: 2
try {
  console.log('Hello');
} catch (err) {
  console.log('Goodbye');
}

// question: 3
var x;

if (x === null) {
  console.log("null");
} else if (x === undefined) {
  console.log("undefined");
} else {
  console.log("ok");
}

/*
// question: 4
throw new Error();
console.log("Hello"); // nothing will be printed
*/



// question: 5

var bicycle = {
  wheels: 2,
  start: function () {
    console.log('3...2...1...Go!');
  },
  stop: function () {
    console.log('Braking!');
  }
};

console.log(bicycle.wheels);
bicycle.start();
bicycle.stop();

// question: 6
try {
  Number(5).toPrecision(300)
} catch (e) {
  console.log("There was an error")
}

// question: 7

var str = "Hello";
console.log(str.match("jello"));

// question: 8

function add(a, b) {
  console.log(a + b)
}

add(3, "4");

