function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(2000).then(() => console.log('Slept for 2 seconds'));
