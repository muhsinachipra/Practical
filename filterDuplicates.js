function filterDuplicates(arr) {
    const count = {}
    for (let item of arr) {
        count[item] = (count[item] || 0) + 1
    }
    return arr.filter(item => count[item] === 1)
}

// Example usage
const array = [1, 2, 2, 3, 4, 5, 5, 6]; // Contains duplicates
const uniqueArray = filterDuplicates(array);
console.log(uniqueArray); // Output: [1, 3, 4, 6]
