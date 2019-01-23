const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipesControllers')

// router.get('/', recipeController.index)
router.get('/new', recipeController.new)
// router.post('/', recipeController.create)
// router.get('/:id', recipeController.show)
// router.get('/:id/edit', recipeController.edit)
// router.put('/:id', recipeController.update)
// router.delete('/:id', recipeController.destroy)



module.exports = router