const { User } = require('../models/usersModels')
// const mongoose = require('mongoose')

module.exports = {
    show: (req, res) => {
        User.find({}).then((data) => {
            res.render('UsersViews/usersViews', data)
        })
    },

    new: (req, res) => {
        res.render('UsersViews/newUserForm')
    },
    
    create: (req, res) => {
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            // Email: req.body.Email,
            // Password: req.body.Password
        }).then(newUser => {
            res.redirect('/')
        })
    }
}

    