const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersControllers')
const passport = require('passport')

router.get('/new', userController.new)
// router.post('/create', userController.create)

router.get('/show', userController.show)


router.post('/create', (req, res) => {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect : '/',
      failureRedirect : '/new',
      failureFlash : true
    });
  
    return signupStrategy(req, res);
  })

// router.get('/', userController.index)
// router.post('/', userController.create)
// router.get('/:id', userController.show)
// router.get('/:id/edit', userController.edit)
// router.put('/:id', userController.update)
// router.delete('/:id', userController.destroy)


module.exports = router