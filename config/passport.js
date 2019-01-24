var LocalStrategy   = require('passport-local').Strategy;
var { User } = require('../models/usersModels');

 const passportConfig = function(passport) {
   passport.use('local-signup', new LocalStrategy({
     usernameField : 'Email',
     passwordField : 'Password',
     passReqToCallback : true
   }, function(req, Email, Password, callback) {
    User.findOne({ 'local.Email' :  Email }, function(err, user) {
        if (err) return callback(err);
        // If there already is a user with this email
        if (user) {
          return callback(null, false, req.flash('signupMessage', 'This email is already used.'))
        }
        else {
          // There is no email registered with this email
          // Create a new user
          let newUser = new User();
          newUser.Email    = Email
          newUser.Password = newUser.encrypt(Password)
    
          newUser.save(function(err) {
            if (err) throw err
            return callback(null, newUser)
          })
        }
      })
   }))

   passport.serializeUser(function(user, callback) {
    callback(null, user.id)
  })
  
  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
        callback(err, user)
    })
  })  
};


module.exports = passportConfig