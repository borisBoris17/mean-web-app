/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
    app.route('/users')
        .post(users.create)
        .get(users.list);
};