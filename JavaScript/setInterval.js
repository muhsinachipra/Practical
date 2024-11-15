const interval = setInterval(() => {
    console.log('tick')
}, 1000)

setTimeout(() => {
    clearInterval(interval)
    console.log('finished')
},5000)


function countDown(start) {
    const interval = setInterval(() => {
        console.log(start)
        start--
        if (start < 0) {
            clearInterval(interval)
            console.log('Happy new year')
        }
    }, 1000)
}

countDown(9)
