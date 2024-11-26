const EventEmitter = require('events')

class PizzaShop extends EventEmitter {
    constructor() {
        super()
        this.orderCount = 0
    }

    order(size, topping) {
        this.orderCount++
        console.log(`Order received! Baking a ${size} pizza with ${topping}.`);
        this.emit('order', size, topping)
    }

    displayOrderCount() {
        console.log(`Total pizzas ordered: ${this.orderCount}`);
    }
}

module.exports = PizzaShop