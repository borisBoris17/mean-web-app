/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var config = require('./config'),
        mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
    
    require('../app/models/user.server.model');
    require('../app/models/post.server.model');
    
    return db;
};