const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser  = require('body-parser');
const path = require('path');
const apiRouter = require('./server/route/apiRouter').router;
const cors = require('cors');
// const userfetch = require('./userfetch');
const { render } = require('ejs');
const { response } = require('express');

const corsOptions = {
    'Access-Control-Allow-Origin': '*'
}

// Instantiate server
var server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(cors(corsOptions));

// Declare API routes
server.use('/api/', apiRouter);

server.listen(3500, function() {
    console.log('Server ------ BACK ------ en écoute :)');
})
