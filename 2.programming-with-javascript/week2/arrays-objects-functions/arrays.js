/**
 * Displays each item in the given array.
 * @param {Array} arr - The array to iterate over.
 */
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'blue') {
            console.log( i, arr[i], '< found blue',) //if the array item is equal to blue, display found blue
        } else {
            console.log(i, arr[i]) //display the array item where the index is euqal to i
        }

    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); //display all items in the array at once