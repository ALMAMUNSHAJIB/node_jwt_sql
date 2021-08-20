const express = require('express');
const route = express.Router();
const connection = require('../database/db');

route.get('/', (req, res)=>{
    connection();
    res.render('index');
});

route.get('/login', (req, res) => {
    res.render('login')
})

route.get('/register', (req, res) => {
    res.render('register')
})



module.exports = route;