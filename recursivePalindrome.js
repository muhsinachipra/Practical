// Write a recursive function to check if a given string is a palindrome

function isPalindrome(str) {
    if (str.length <= 1) {
        return true
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    return isPalindrome(str.slice(1, -1))
}

// Example usage:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false




// function isPalindrome(str) {
//     return recur(0, str.length - 1)
//     function recur(left, right) {
//         if (left >= right) {
//             return true
//         }
//         if (str[left] === str[right]) {
//             return recur(left + 1, right - 1)
//         }
//         return false
//     }
// }

// // Example usage:
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));   // false
