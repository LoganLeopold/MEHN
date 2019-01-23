const express = require('express')
const router = express.Router()
const homepageController = require('../controllers/homepageControllers')

router.get('/', homepageController.index)

module.exports = router