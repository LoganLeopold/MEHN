const Recipe = require('../models/recipesModels')

module.exports = { 
    new: (req,res) => {
        // res.render('/new', 'recipesViews/createRecipes')
        res.send("Hello world")
    },
    
    show: (req,res) => {
        Recipe.findOne({_id: req.params.id}).populate('title description instructions ingredients email')
        .exec((err, recipe) => {
            res.render('recipesViews/viewRecipe')
        })
        
    },
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
// ,
// create: (req,res) => {
//   Recipe.create({
//     title: req.body.Recipe.title,
//     description: req.body.Recipe.description,
//     instructions: req.body.Recipe.instructions,
//     ingredients: req.body.Recipe.ingredients,
//     email: req.body.Recipe.email,
//   }).then(newRecipe => {
//       req.user.Recipe.push(newRecipe)
//   })

// },

new: (req,res) => {
    res.render('/recipesViews/createRecipes', )
    console.log("new recipe form")
}

// show: (req,res) => {
//     Recipe.findOne({_id: req.params.id}).populate('title description instructions ingredients email')
//     .exec((err, recipe) => {
//         res.render('recipesViews/viewRecipe')
//     })
    
// }
}


