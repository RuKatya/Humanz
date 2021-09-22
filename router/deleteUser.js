const { Router } = require('express')
const router = Router()

//Colors
const color = require('colors')

//Models
const User = require('../models/users')

//DELETE TASK
router.post('/', async (req, res) => {
    console.log('deleted?')
    try {
        await User.findByIdAndDelete(req.body._id)
        console.log('deleted epta')
        res.redirect('/')

    } catch (err) {
        console.log(color.bgRed.white(err))
    }
})

module.exports = router;