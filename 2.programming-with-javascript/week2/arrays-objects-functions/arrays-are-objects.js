var fruits = [];
fruits.push('apple', 'banana', 'peach'); // ['apple', 'banana', 'peach']
console.log(fruits.length); // 3
console.log(fruits[0]); // 'apple'
console.log(fruits); // ['apple', 'banana', 'peach']

fruits.pop(); // ['apple', 'banana']
console.log(fruits); // ['apple', 'banana']


/**
 * Builds an array with the provided elements.
 * @param {*} one - The first element of the array.
 * @param {*} two - The second element of the array.
 * @param {*} three - The third element of the array.
 */
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'banana', 'peach']

