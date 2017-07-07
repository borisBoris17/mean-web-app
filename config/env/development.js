/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = {
    db: 'mongodb://localhost/mean-book',
    sessionSecret : 'developmentSessionSecret',
    facebook: {
        clientID: '1476947195721882',
        clientSecret: 'ba8ddfd7bc0a4f8c23bef16bbeb4c336',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    }
};