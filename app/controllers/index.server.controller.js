/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log("Last Visit: " + req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    
    res.render('index', {
        title: 'Hello World!'
    });
};