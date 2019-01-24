var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../models/user');

 module.exports = function(passport) {
   passport.use('local-signup', new LocalStrategy({
     usernameField : 'Email',
     passwordField : 'Password',
     passReqToCallback : true
   }, function(req, Email, Password, callback) {
    User.findOne({ 'local.Email' :  Email }, function(err, user) {
        if (err) return callback(err);
    
        // If there already is a user with this email
        if (user) {
          return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
        }
        else {
          // There is no email registered with this email
          // Create a new user
          var newUser            = new User();
          newUser.local.firstName = firstName
          newUser.local.lastName = lastName
          newUser.local.Email    = Email;
          newUser.local.Password = newUser.encrypt(Password);
    
          newUser.save(function(err) {
            if (err) throw err;
            return callback(null, newUser);
          });
        }
      });
   }));
};
