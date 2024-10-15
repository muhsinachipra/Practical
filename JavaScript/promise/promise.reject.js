const myPromise = Promise.reject('Immediate error!');

myPromise.catch(error => console.error(error));
