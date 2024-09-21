function findSecondLargest(arr) {
    let first = -Infinity
    let second = -Infinity
    for (let num of arr) {
        if (num > first) {
            second = first
            first = num
        } else if (num > second && num < first) {
            second = num
        }
    }
    return second
}

// Example usage:
const numbers = [10, 5, 20, 20, 4];
const secondLargest = findSecondLargest(numbers);

console.log('Second Largest Number:', secondLargest); // Output: 10
