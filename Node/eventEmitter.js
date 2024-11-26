const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('order-pizza', function (size, topping) {
    console.log(`Order received! Baking a ${size} pizza with ${topping}`)
})

emitter.on('order-pizza', function (size) {
    if (size === 'large') {
        console.log(`Serving complimentary Drink`)
    }
})

console.log('This do work before event occurs')

emitter.emit('order-pizza', "large", "mushrooms")