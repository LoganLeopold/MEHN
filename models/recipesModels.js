const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema({
    title: String,
    description: String,
    instructions: String,
    ingredients: [String],
    User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = {
    Recipe: mongoose.model('Recipe', Recipe)
}