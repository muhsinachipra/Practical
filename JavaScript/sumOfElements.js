function sumOfElements(arr) {
    let sum = 0
    function recursiveSum(element) {
        if (Array.isArray(element)) {
            element.forEach(recursiveSum)
        } else {
            sum += element
        }
    }
    recursiveSum(arr)
    return sum
}

// Example usage:
const multiDimensionalArray = [1, [2, [3, 4]], 5, [6, 7]];
console.log(sumOfElements(multiDimensionalArray)); // Output: 28
