const express = require('express');
const { logUser } = require('../controleurs/userCtrlFront');
const route = express.Router();
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
route.get('/', (req,res) => {res.render('../views/home')});
route.post('/new', postCtrlFront.addPost);

//POST

module.exports = route;

