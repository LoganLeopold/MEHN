const mongoose = require("../db/connection")
const Schema = mongoose.Schema

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