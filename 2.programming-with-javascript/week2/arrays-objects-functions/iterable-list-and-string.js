// arrays are iterable
var veggies = ['carrot', 'potato', 'onion'];
for (let veggie of veggies) {
  console.log(veggie);
}

// objects are not iterable



// strings are iterable
var str = 'hello';
for (let char of str) {
  console.log(char);
}

// concat strings
var str1 = 'hello';
var str2 = 'world';
var str3 = str1.concat(str2);
var str4 = str1 + str2;
console.log(str3); // 'helloworld'
console.log(str4); // 'helloworld'

// split strings
var str = 'hello world';
var arr = str.split(' ');
console.log(arr); // ['hello', 'world']

// join strings
var arr = ['hello', 'world'];
var str = arr.join(' ');
console.log(str); // 'hello world'

// slice strings
var str = 'hello world';
var sliced = str.slice(0, 5);
console.log(sliced); // 'hello'

// replace strings
var str = 'hello world';
var replaced = str.replace('hello', 'goodbye');
console.log(replaced); // 'goodbye world'

// toUpperCase
var str = 'hello world';
var upper = str.toUpperCase();
console.log(upper); // 'HELLO WORLD'

// toLowerCase
var str = 'HELLO WORLD';
var lower = str.toLowerCase();
console.log(lower); // 'hello world'

// lastIndexOf
var str = 'hello world';
var index = str.lastIndexOf('l');
console.log(index); // 9

// charAt
var str = 'hello world';
var char = str.charAt(0);
console.log(char); // 'h'


