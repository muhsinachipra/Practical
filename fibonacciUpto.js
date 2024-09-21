function flattenArray(arr) {
    let result = []
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item))
        } else {
            result.push(item)
        }
    })

    return result
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], [6, 7]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]








// // Create a function to generate the Fibonacci sequence up to a specified number of terms.

// function generateFibonacci(terms) {
//     let fibonacci = [0, 1]
//     for (let i = 2; i < terms; i++) {
//         fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
//     }
//     return fibonacci
// }

// // Example usage:
// const terms = 10;
// const fibonacciSequence = generateFibonacci(terms);
// console.log(fibonacciSequence);  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]  