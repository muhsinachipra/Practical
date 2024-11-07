const fs = require('fs')

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading the file: ", err)
        return
    }
    let words = data
        .toLowerCase() // convert to lowercase
        .replace(/[^\w\s]/g, '') // remove punctuation
        .split(/\s+/); // split by spaces
    let wordsCount = {}
    words.forEach((word) => {
        wordsCount[word] = (wordsCount[word] || 0) + 1
    })

    let duplicates = Object.keys(wordsCount).filter(word => wordsCount[word] > 1)
    console.log(`Total duplicate words: ${duplicates.length}`);
    duplicates.forEach((word) => {
        console.log(`${word} - ${wordsCount[word]} times`);
    })
})