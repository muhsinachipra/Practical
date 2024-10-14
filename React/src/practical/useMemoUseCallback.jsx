const memoizedValue = (() => expensiveComputation(a, b), [a, b])
const memoizedCallback = (() => doSomething(a, b), [a, b])