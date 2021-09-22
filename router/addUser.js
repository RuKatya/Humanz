//Express
const { Router } = require('express')
const router = Router()

//Colors
const color = require('colors')

//Models
const User = require('../models/users')

router.post('/', async (req, res) => {
    console.log(req.body)

    const user = new User({
        name: req.body.nameUser,
        idUser: req.body.idUser,
        ip: req.body.ipUser,
        phone: req.body.phoneUser,
    })

    try {
        await user.save();
        res.redirect('/')
    } catch (err) {
        console.log(color.bgRed.black(err))
        res.redirect('/')
    }
})

module.exports = router;