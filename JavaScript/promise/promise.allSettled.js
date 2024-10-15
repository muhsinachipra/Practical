const promise1 = new Promise(resolve => setTimeout(() => resolve('Success'), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Failed'), 2000));

Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));
// Output: [{status: "fulfilled", value: "Success"}, {status: "rejected", reason: "Failed"}]
