const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Hello World!`);
})

app.get('/hello/:name', (req, res)=> {
    res.send(`Hello ${req.params.name}!`);
})

app.put(`/put/:message`, (req, res) =>{
    res.send(`you sent the message: ${req.params.message}`);
})

mongoose.connect('mongodb://Student17:Student17@logan', { dbName: 'home17' })
    .then(() => {
        console.log("Connected to the database!");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    })
    .catch(() => {
        console.log("Failed to connect to the database.");
    });
