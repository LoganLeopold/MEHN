const Users = require('../models/usersModels')

module.exports = {
    new: (req, res) => {
        res.render('UsersViews/newUserForm')
    }
}