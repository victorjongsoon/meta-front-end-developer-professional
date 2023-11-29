/**
 * Finds the occurrences of a specific letter in a word.
 * @param {string} word - The word to search for the letter.
 * @param {string} match - The letter to find in the word.
 */
function letterFinder(word, match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}


letterFinder("test", "t");
