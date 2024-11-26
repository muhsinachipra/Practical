function isPalindrome(str) {
    return recur(0, str.length - 1)
    function recur(left, right) {
        if (left >= right) {
            return true
        }
        if (str[left] === str[right]) {
            return recur(left + 1, right - 1)
        }
        return false
    }
}

// Example usage:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
