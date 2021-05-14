const User = require('../models/user.model')

exports.createNewUser = (req, res, next) => {
    const userData = {...req.body}

    User.createUser(userData).then(() => {
        res.status(201).json({
            message: 'Created a new user database entry successfully'
        })
    }).catch(err => {
        console.log(err)
    })
}