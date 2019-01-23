const express = require('express')
const router = express.Router()

router.use('/recipe', require('./recipesRoutes'))
// router.use('/user', require('./usersRoutes'))



module.exports = router