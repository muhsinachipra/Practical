// Write a function that takes a string and returns a new string with all vowels removed.

function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '')
}

// Example usage:
const result = removeVowels("Hello World");
console.log(result);  // Hll Wrld
