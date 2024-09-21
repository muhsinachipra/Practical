// Write a function to find the maximum value in an array without using built-in methods like Math.max().

function findMax(arr) {
    let max = arr[0]
    arr.forEach(num => {
        if (num > max) max = num
    });
    return max
}

// Example usage
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(findMax(numbers)); // Output: 9
