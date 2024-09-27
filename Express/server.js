// Step 1: Import required packages
const express = require('express');
const app = express();
const PORT = 3000;

// Step 2: Middleware to parse incoming JSON requests
app.use(express.json());

// Step 3: Define routes
app.get('/api/test', (req, res) => {
    res.json({ message: 'GET request successful' });
});

app.post('/api/test', (req, res) => {
    const data = req.body;
    res.json({ message: 'POST request successful', data });
});

app.put('/api/test', (req, res) => {
    const data = req.body;
    res.json({ message: 'PUT request successful', data });
});

app.delete('/api/test', (req, res) => {
    res.json({ message: 'DELETE request successful' });
});

// Step 4: Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
