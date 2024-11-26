// Implement a function that finds the intersection (common elements) of two sorted arrays.

function findIntersection(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

// Example 1
const array1 = [1, 2, 4, 5, 6];
const array2 = [2, 3, 5, 7];
console.log(findIntersection(array1, array2)); // Output: [2, 5]

// Example 2
const array3 = [1, 3, 4, 6, 8, 9];
const array4 = [3, 4, 6, 10, 12];
console.log(findIntersection(array3, array4)); // Output: [3, 4, 6]

// Example 3
const array5 = [0, 2, 3, 7, 8];
const array6 = [1, 2, 3, 4, 8, 10];
console.log(findIntersection(array5, array6)); // Output: [2, 3, 8]

// Example 4
const array7 = [1, 5, 9, 10, 15];
const array8 = [2, 3, 4, 11, 15];
console.log(findIntersection(array7, array8)); // Output: [15]

// Example 5
const array9 = [100, 101, 102];
const array10 = [50, 60, 100, 200];
console.log(findIntersection(array9, array10)); // Output: [100]

// Example 6 (No intersection)
const array11 = [1, 2, 3];
const array12 = [4, 5, 6];
console.log(findIntersection(array11, array12)); // Output: []
