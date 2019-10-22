'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'mariadb',
    user: 'admin',
    password: 'admin',
    database: 'haig'
});
 
// connect to database
mc.connect();



// App
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var routes = require('./appRoutes'); //importing route
routes(app); //register the route


// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// API
app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = {
    message: 'Message from API get'
  };
  res.send(JSON.stringify(data, null, 2));
});

app.post('/post', function(req, res) {
  res.set('Content-Type', 'application/json');
  let data = {
    message: 'Message from API Post',
    task: req.body.task,
    status: req.body.status,
  };
  res.send(JSON.stringify(data, null, 2));
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
