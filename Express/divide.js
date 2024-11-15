// Import required modules
const express = require('express');
const app = express();

// Define the port number
const PORT = 3000;

// Route to handle division of two numbers from the URL
app.get('/:num1/:num2', (req, res) => {
    // Extract numbers from the request parameters
    const num1 = req.params.num1;
    const num2 = req.params.num2;

    // Validation: check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            error: 'Invalid input, both parameters must be valid numbers.'
        });
    }

    // Convert parameters to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Validation: check if division by zero
    if (number2 === 0) {
        return res.status(400).json({
            error: 'Division by zero is not allowed.'
        });
    }

    // Perform the division
    const result = number1 / number2;

    // Respond with the result
    res.json({
        result: result
    });
});

// Handle any other routes
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found.'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
