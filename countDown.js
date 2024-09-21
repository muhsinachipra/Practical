// Create a function that initiates a countdown based on the specified number of seconds


// function countdown(num) {
//     for (let i = 0; i <= num; i++) {
//         setTimeout(() => {
//             console.log(num--);
//         }, i * 1000);
//     }
// }

// countdown(10);



function startCountdown(seconds) {
    const countDown = setInterval(() => {
        console.log(`remaining Time ${seconds}`)
        seconds--
        if (seconds < 0) {
            clearInterval(countDown)
            console.log('Count down completed')
        }
    }, 1000)
}

// Example usage:
startCountdown(10);
