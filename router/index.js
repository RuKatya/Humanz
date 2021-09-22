//Express
const { Router } = require('express')
const router = Router()

//Colors
const color = require('colors')

//Models
const User = require('../models/users')

router.get('/', async (req, res) => {
    const users = await User.find()

    console.log(users)

    try {
        res.render('index', {
            title: 'Home Page',
            users
        })
    } catch (err) {
        console.log(color.bgRed.black(err))
    }
})

module.exports = router;