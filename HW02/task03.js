'use strict';
const string = 'The quick brown fox jumped over the lazy dog';

const findLongestWord = function (string) {
    const stringSplit = string.split(' ');
    let longestWord = stringSplit[0];
    for (const word of stringSplit) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
};

findLongestWord('The quick brown fox jumped over the lazy dog');

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));