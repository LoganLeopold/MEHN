const  mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mehnRecipes')

mongoose.Promise = Promise

module.exports = mongoose

