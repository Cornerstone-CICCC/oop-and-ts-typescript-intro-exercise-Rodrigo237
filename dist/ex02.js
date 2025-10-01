"use strict";
// 2. Create a function named `isPalindrome` that takes a string as a parameter.
//    The function should return `true` if the string is a palindrome (reads the same backward as forward),
//    otherwise, return `false`.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function isPalindrome(word) {
    const textInput = word.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reverse = textInput.split('').reverse().join('');
    return textInput === reverse;
}
// Expected output:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
