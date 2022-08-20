const express = require('express');
const LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');
const route = express.Router();

const { logUser } = require('../controleurs/userCtrlFront');
const userCtrlFront = require('../controleurs/userCtrlFront');
const postCtrlFront = require('../controleurs/postCtrlFront');


//LOGIN
route.get('/login', (req,res) => {res.render('../views/connexion')});
route.post('/login', userCtrlFront.logUser);

//RIGISTER
route.get('/register',(req,res) => {
res.render('../views/register')
});
route.post('/register', userCtrlFront.addUser);

//HOME
route.get('/', (req,res) => {
    if(localStorage.getItem('token'))
        res.render('../views/home')
    else
        res.redirect('/login')
});
route.post('/new', postCtrlFront.addPost);

//POST
route.get('/logout', userCtrlFront.logOut);

module.exports = route;

