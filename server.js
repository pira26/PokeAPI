const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('./config.js');

// connect to the database and load models
//require('./server/models').connect(config.dbUrl);

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); 
	res.setHeader('Access-Control-Allow-Headers', 'X-requested-With, content-type, Authorization'); 
	next();
});

// logs 
app.use(morgan('dev'));

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// tell the app to look for static files in these directories
app.use(express.static('./client/src/static/'));
app.use(express.static('./client/dist/'));

// routes
app.use('/', (req, res) => {
	res.send('lol');
})

// start the server
app.listen(config.port, () => {
  console.log('Server is running on http://127.0.0.1:7000 or ', config.port);
});