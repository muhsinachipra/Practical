const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, World!');
    }, 1000);
});

myPromise.then(message => console.log(message));
