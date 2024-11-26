const PizzaShop = require('./pizza-shop')

const pizzaShop = new PizzaShop();

// Add a listener for the 'order' event
pizzaShop.on('order', (size, topping) => {
    console.log(`Order event captured: A ${size} pizza with ${topping} is being prepared.`);
});

// Place a few orders
pizzaShop.order('large', 'pepperoni');
pizzaShop.order('medium', 'mushrooms');

// Display the total orders
pizzaShop.displayOrderCount();