/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
    var user = new User(req.body);
    
    user.save(function(err){
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};