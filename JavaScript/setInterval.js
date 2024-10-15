// const interval = setInterval(() => {
//     console.log('tick')
// }, 1000)

// setTimeout(() => {
//     clearInterval(interval)
//     console.log('finished')
// },5000)


// function countDown(start) {
//     const interval = setInterval(() => {
//         console.log(start)
//         start--
//         if (start < 0) {
//             clearInterval(interval)
//             console.log('Happy new year')
//         }
//     }, 1000)
// }

// countDown(9)

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000)
// }


setTimeout(() => {
    console.log('step 1')
    setTimeout(() => {
        console.log('step 2')
        setTimeout(() => {
            console.log('step 3')
        }, 1000)
    }, 1000)
}, 1000)