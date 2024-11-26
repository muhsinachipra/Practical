// Create a function to calculate the factorial of a given number using recursion.

function factorial(n) {
    if (n === 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(5))