const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    Name: {
        firstName: String,
        lastName: String
    },
    Email: String,
    Password: String,
    Recipe: [ 
        {
        type: Schema.Types.ObjectId.app,
        ref: 'Recipe'
        }
    ]
})


module.exports = {
    User: mongoose.model('User', User),

}