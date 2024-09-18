// Hello World, express

const express = require('express');
const app = express();
const port = 3000;

// Build Server
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.send('Hello Express\n');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});