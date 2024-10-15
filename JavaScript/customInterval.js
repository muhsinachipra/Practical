// function customInterval(func, delay) {
//     function repeat() {
//         func()
//         setTimeout(repeat, delay)
//     }
//     setTimeout(repeat, delay)
// }

// customInterval(() => console.log('tick'), 1000)


const intervalId = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10000);
