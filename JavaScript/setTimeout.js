setTimeout(() => {
    console.log('hello')
}, 3000)



setTimeout(() => {
    console.log('step 1')
    setTimeout(() => {
        console.log('step 2')
        setTimeout(() => {
            console.log('step 3')
        }, 1000)
    }, 1000)
}, 1000)



for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}
