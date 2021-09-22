//EXPRESS
const express = require('express');
const app = express(); //express
//BODYPARSER
const bodyParser = require('body-parser')
//PATH
const path = require('path')
//PORT
const PORT = process.env.PORT ?? 6565; //connect to port 6565
//MONGOOSE
const mongoose = require('mongoose')
//COLORS
const color = require('colors')
//KEYS
const keys = require('./keys')

//Connecting to data
async function start() {
    try {
        await mongoose.connect(keys.MONGODB_URI, () => {
            console.log(color.bgGreen.black(`DATA CONNECTED`))
        })
    } catch (err) {
        console.log(color.bgRed.white(err))
    }
}

start();

app.get('/', (req, res) => {
    res.send(`<h1>HI</h1>`)
})


//Connecting to localhost
try {
    app.listen(PORT, () => {
        console.log(color.bgBlue.black(`Server listen on`, color.bgBlue.white(`http://localhost:${PORT}`)))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}

