// jshint esversion:6
const express = require('express');
const router = express.Router();

router.get('/1', (req, res) => {
    res.render("1.CountDownTimer/index");
    console.log("Project-1");
});

router.get('/2', (req, res) => {
    res.render("2.Quiz App/index");
    console.log("Project-2");
});

module.exports = router;