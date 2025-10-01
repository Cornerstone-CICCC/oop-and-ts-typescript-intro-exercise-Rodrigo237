"use strict";
// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const text = word.toLowerCase();
    let count = 0;
    for (const char of text) {
        if (vowels.indexOf(char) !== -1) {
            count++;
        }
    }
    return count;
}
// Expected output:
console.log(countVowels("hello")); // 2
console.log(countVowels("typescript")); // 2
