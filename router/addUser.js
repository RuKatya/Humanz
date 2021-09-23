//Express
const { Router } = require('express')
const router = Router()

//Colors
const color = require('colors')

//Models
const User = require('../models/users')

//Validation
const { validationResult } = require('express-validator');
const { userValidators } = require('../validation/index')


router.post('/', userValidators, async (req, res) => {
    const { Name, ID, IP, Phone } = req.body

    console.log(req.body)

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash('error', errors.array()[0].msg)
        return res.status(422).redirect('/');
    }

    try {
        const user = new User({
            Name, ID, IP, Phone
        })
        await user.save();
        console.log(`User ${Name} saved`)
        res.redirect('/')
    } catch (err) {
        console.log(color.bgRed.black(err))
        res.redirect('/')
    }
})

module.exports = router;