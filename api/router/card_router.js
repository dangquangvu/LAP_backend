const express = require('express');
var app = express();
app.get('/', (req, res) => {
    console.log('card');
    res.send('card')
});

module.exports = app;