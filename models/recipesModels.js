const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema({
    Recipe: {
        title: String,
        description: String,
        instructions: String,
        ingredients: [String],
        //user? 
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = {
    Recipe: mongoose.model('Recipe', Recipe)
}