const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2)
    }, 2000)
})

promise1.then(res => res + 1).then(res => res * 2).then(res => console.log(res))