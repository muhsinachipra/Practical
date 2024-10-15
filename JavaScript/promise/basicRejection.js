const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong!');
    }, 2000);
});

myPromise.catch(error => console.error(error));
