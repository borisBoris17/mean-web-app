/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
process.env.NODE_DEV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
        express = require('./config/express');

var db = mongoose();
var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');