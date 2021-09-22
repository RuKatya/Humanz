//Express
const { Router } = require('express')
const router = Router()

//Colors
const color = require('colors')

//Models
const User = require('../models/users')

router.get('/', async (req, res) => {
    const { Name, ID, IP, Phone } = req.body
    const users = await User.find()

    try {
        res.render('index', {
            title: 'Home Page',
            users,
            error: req.flash('error'),
            data: {
                Name, ID, IP, Phone
            }
        })
    } catch (err) {
        console.log(color.bgRed.black(err))
    }
})

module.exports = router;