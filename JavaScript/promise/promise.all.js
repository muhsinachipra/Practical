const promise1 = new Promise(resolve => setTimeout(() => resolve('One'), 1000))
const promise2 = new Promise(resolve => setTimeout(() => resolve('Two'), 2000))
const promise3 = new Promise(resolve => setTimeout(() => resolve('Three'), 3000))

Promise.all([promise1, promise2, promise3]).then(msg => console.log(msg))