//EXPRESS
const express = require('express');
const app = express(); //express
//BODYPARSER
const bodyParser = require('body-parser')
//PATH
const path = require('path')
//PORT
const PORT = process.env.PORT ?? 8787; //connect to port 6565
//MONGOOSE
const mongoose = require('mongoose')
//COLORS
const color = require('colors')
//KEYS
const keys = require('./keys')

//Connecting EJS
app.set('view engine', 'ejs')
console.log(app.get('view engine'))
app.set('views', path.resolve(__dirname, 'pages'))

app.use(bodyParser.urlencoded({ extended: false })) //bodyParser
app.use(express.static(path.resolve(__dirname, 'public'))) //static

//Connecting to data
async function start() {
    try {
        await mongoose.connect(
            keys.MONGODB_URI,
            { useNewUrlParser: true },
            () => {
                console.log(color.bgGreen.black(`DATA CONNECTED`))
            })
    } catch (err) {
        console.log(color.bgRed.white(err))
    }
}

start();

//ROUTER
const index = require('./router/index')
const addUser = require('./router/addUser')
const removeUser = require('./router/deleteUser')

app.use('/', index)
app.use('/addUser', addUser)
app.use('/remove', removeUser)

//Connecting to localhost
try {
    app.listen(PORT, () => {
        console.log(color.bgBlue.black(`Server listen on`, color.bgBlue.white(`http://localhost:${PORT}`)))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}

