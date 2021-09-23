const { Schema, model } = require('mongoose')

const User = new Schema({
    Name: {
        type: String,
        require: true
    },
    ID: {
        type: Number,
        required: true
    },
    IP: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    }
})

module.exports = model('User', User)