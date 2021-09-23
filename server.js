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
//CONNECT FLASH
const flash = require('connect-flash')
//COOKIES
let session = require('express-session');
//Fetch
// const fetch = require('node-fetch');

//Connecting EJS
app.set('view engine', 'ejs')
console.log(app.get('view engine'))
app.set('views', path.resolve(__dirname, 'pages'))

app.use(bodyParser.urlencoded({ extended: false })) //bodyParser
app.use(express.static(path.resolve(__dirname, 'public'))) //static

//Cookies
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
}));

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

//Middleware
app.use(flash())


//IP-API
app.post('/ipapi', (req, res) => {
    const { ipadress } = req.body;

    console.log(`get ip: ${ipadress}`)

    fetch(`https://ipapi.co/${ipadress}/json`)
        .then(r => r.json())
        .then(data => {
            res.send({
                ok: true,
                data
            })
        })
})

//Router
const index = require('./router/index')
const addUser = require('./router/addUser')
const removeUser = require('./router/deleteUser')
const errorPage = require('./router/error')

app.use('/', index)
app.use('/addUser', addUser)
app.use('/remove', removeUser)

app.use(errorPage) //page 404

// //IP-API
// app.post('/ipapi', (req, res) => {
//     const { ipadress } = req.body;

//     console.log(`get ip: ${ipadress}`)

//     console.log(ipadress)
//     fetch(`http://ip-api.com/json/${ipadress}`)
//         .then(r => r.json())
//         .then(ipadress => {
//             res.send({
//                 ok: true,
//                 ipadress
//             })
//         })
// })

//Connecting to localhost
try {
    app.listen(PORT, () => {
        console.log(color.bgBlue.black(`Server listen on`, color.bgBlue.white(`http://localhost:${PORT}`)))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}

