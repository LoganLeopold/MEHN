const mongoose = require("../db/connection")
const Schema = mongoose.Schema
var bcrypt   = require('bcrypt-nodejs')


const User = new Schema({
    firstName: String,
    lastName: String,
    Email: String,
    Password: String
})

User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };


// module.exports = mongoose.model('User', User)

module.exports = {
    User: mongoose.model('User', User)
}