const express = require('express')
const config = require('./config/app')

require('dotenv').config()

const app = express()

app.get('/home', (req, res) => {
    return res.send("Home Sweet Home");
});

app.get('/boss', (req, res) => {
    return res.send("Home Sweet Bome");
});
const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`); 
});

console.log("dic ");