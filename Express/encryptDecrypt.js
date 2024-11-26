const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json())

function encrypt(data) {
    return Buffer.from(data).toString('base64')
}

function decrypt(data) {
    return Buffer.from(data, 'base64').toString('utf8')
}

app.use((req, res, next) => {
    if (req.method === "GET") {
        return res.status(403).send('Get requests are blocked')
    }
    next()
})

app.post('/', (req, res) => {
    const { data } = req.body
    if (!data) {
        return res.status(400).send('No data provided')
    }

    const encryptedData = encrypt(data)

    fs.writeFileSync('encryptedData.json', JSON.stringify(encryptedData))

    res.status(201).send('success')
})

app.get('/', (req, res) => {
    try {
        const encryptedData = JSON.parse(fs.readFileSync('encryptedData.json', 'utf-8'))
        const decryptedData = decrypt(encryptedData)
        res.status(200).json({
            data: decryptedData
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, () => {
    console.log('server running...')
})