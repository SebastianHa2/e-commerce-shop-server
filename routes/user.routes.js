const express = require('express')

const userControllers = require('../controllers/user.controller')

const router = express.Router()

router.post('/create-new', userControllers.createNewUser)

module.exports = router



