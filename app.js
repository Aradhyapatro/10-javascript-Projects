// jshint esversion:6
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

const index = require('./routes/main.js');
app.use('/', index);

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("Server has started");
});