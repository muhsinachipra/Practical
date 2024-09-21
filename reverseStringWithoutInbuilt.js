function reverseString(s) {
    let reversedString = ''
    for (let i = s.length - 1; i >= 0; i--) {
        reversedString += s[i]
    }
    return reversedString
}

// Example usage:
const originalString = 'hello';
const reversedString = reverseString(originalString);

console.log('Original String:', originalString); // Output: hello
console.log('Reversed String:', reversedString); // Output: olleh
