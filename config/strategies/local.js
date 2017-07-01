/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');
    
module.exports = function() {
    passport.use(new LocalStartegy(function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            if(err) {
                return done(err)
            }
            
            if(!user) {
                return done(null, false, {
                    message: 'Unknown User'
                });
            }
        
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }
        
            return done(null, user);
        });
    }));
};