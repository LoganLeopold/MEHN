const User = require('../models/usersModels')

module.exports = {
    new: (req, res) => {
        res.render('UsersViews/newUserForm')

    },
    create: (req, res) => {
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }).then(newUser => {
            console.log(newUser)
        })

    }
}
