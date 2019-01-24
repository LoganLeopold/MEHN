const mongoose = require("../db/connection")
const Schema = mongoose.Schema
User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  
const User = new Schema({
    firstName: String,
    lastName: String,
    Email: String,
    Password: String
})



// module.exports = mongoose.model('User', User)

module.exports = {
    User: mongoose.model('User', User)
}