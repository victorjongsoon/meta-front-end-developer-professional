// Using typeof

var test = typeof('what is this?');
console.log(test); // string

var test = typeof(123);
console.log(test); // number

var test = typeof(true);
console.log(test); // boolean

var test = typeof(undefined);
console.log(test); // undefined

var test = typeof(null);
console.log(test); // object

var test = typeof([]);
console.log(test); // object

var test = typeof({});
console.log(test); // object

var test = typeof(function(){});
console.log(test); // function

var test = typeof(NaN);
console.log(test); // number

var test = typeof(Infinity);
console.log(test); // number

var test = typeof(-Infinity);
console.log(test); // number

var test = typeof(0);
console.log(test); // number

var test = typeof(-0);
console.log(test); // number

var test = typeof(1 < 2); 
console.log(test); // boolean

var test = typeof([1, 2, 3]);
console.log(test); // object