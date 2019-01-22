const Recipe = require('../models/recipesModels')

module.exports = { 

// create: (req,res) => {
//   Recipe.create({
//     title: req.body.Recipe.title,
//     description: req.body.Recipe.description,
//     instructions: req.body.Recipe.instructions,
//     ingredients: req.body.Recipe.ingredients,
//     email: req.body.Recipe.email,
//   }).then(recipe => {
//       req.email.
//   })
// 
// }

show: (req,res) => {
    Recipe.findOne({_id: req.params.id}).populate('title description instructions ingredients email')
    .exec((err, recipe) => {
        res.render('recipesViews/viewRecipe')
    })
    
}


}