const express = require('express')
const router = express.Router()
const userController = ('../controllers/users')

router.get('/', userController.index)
router.get('/new', userController.new)
router.post('/', userController.create)
router.get('/:id', userController.show)
router.get('/:id/edit', userController.edit)
router.put('/:id', userController.update)
router.delete('/:id', userController.destroy)


module.exports = router