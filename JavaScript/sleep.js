function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedMessage(msg) {
    console.log('Wait for it...')
    await sleep(5000)
    console.log('Done waiting!')
}

delayedMessage()