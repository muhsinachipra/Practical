const promise1 = new Promise(resolve => setTimeout(() => resolve('First'), 2000))
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 1000))

Promise.race([promise1, promise2]).then(result => console.log(result))