'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'mariadb',
    user     : 'admin',
    password : 'admin',
    database : 'haig'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;