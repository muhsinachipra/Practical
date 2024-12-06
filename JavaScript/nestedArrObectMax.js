const abc = [[{ a: [1, 2, 3, 4] }], [{ a: [1, 2, 3, 4] }], [{ a: [1, 2, 3, 4] }], [{ a: [1, 2, 3, 5] }], [{ a: [1, 2, 3, 6] }]]

function max(arr) {
    let max = -Infinity
    arr.forEach((array) => {
        let currMax = mathMax(array[0].a)
        max = max < currMax ? currMax : max
    })
    return max
}

function mathMax(arr) {
    let max = -Infinity
    arr.forEach((ele) => {
        max = max < ele ? ele : max
    })
    return max
}

console.log(max(abc))