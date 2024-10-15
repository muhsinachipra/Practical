function curryAdd(a) {
    return function (b) {
        return a + b
    }
}
const add5 = curryAdd(5)
console.log(add5(3))