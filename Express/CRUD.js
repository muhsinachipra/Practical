const express = require('express')

const app = express()
const PORT = 3000

// Custom middleware to log request method and URL
const logRequests = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();  // Pass control to the next handler
};

// Use the custom middleware globally
app.use(logRequests);

// Middleware to parse incoming JSON requests
app.use(express.json());

let items = [];
let nextId = 1;

app.post('/items', (req, res) => {
    const newItem = {
        id: nextId++,
        name: req.body.name,
        description: req.body.description
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).send("Item not found");
    }
    res.json(item);
});

app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).send("Item not found");
    }
    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    res.json(item);
});

app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) {
        return res.status(404).send("Item not found");
    }
    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem[0]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// {
//     "name": "Item1",
//     "description": "A test item"
// }
