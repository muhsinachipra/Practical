function flattenArray(arr) {
    let result = []
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element))
        } else {
            result.push(element)
        }
    });
    return result
}

const nestedArray = [[1, [2, [3, [4, [5, 6]]]]], [7, 8], [[9, 10]], 11];
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
