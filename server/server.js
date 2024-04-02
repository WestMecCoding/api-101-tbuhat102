const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello worlds')
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

app.get('Leo',(req, res) => {
    res.send('wsg gang');
});