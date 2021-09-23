//EXPRESS
const express = require('express');
const app = express(); //express
//Axios
const axios = require('axios').default;
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
// //Fetch
// const fetch = require('node-fetch');

//Connecting EJS
app.set('view engine', 'ejs')
console.log(app.get('view engine'))
app.set('views', path.resolve(__dirname, 'pages'))

app.use(bodyParser.urlencoded({ extended: true })) //bodyParser
app.use(bodyParser.json());
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


app.post('/ipapi', async (req, res) => {
    const { ipadress } = await req.body;

    console.log(`get ip: ${ipadress}`)

    console.log(ipadress)
    // axios.post(`http://ip-api.com/json/5.102.195.197`)
    axios.post(`http://ip-api.com/json/${req.body.ipadress}`)
        .then((response) => {
            console.log(response.data)
            const data = response.data
            res.send({
                data
            })
        })
        .catch((err) => {
            console.log(color.bgRed.black(err))
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

//Connecting to localhost
try {
    app.listen(PORT, () => {
        console.log(color.bgBlue.black(`Server listen on`, color.bgBlue.white(`http://localhost:${PORT}`)))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}

