require('dotenv').config()


const express = require('express')
const app = express()

const mongoose = require('mongoose')
const connectionString = process.env.CONNECTIONSTRING
mongoose.connect(connectionString, { useNewUrlParser:true, useUnifiedTopology: true })
    .then(() => { 
        console.log('Base de dados conectada')
        app.emit('Conexão Estabelecida')})
    .catch(e => console.log(e))

const session = require('express-session');

const MongoStore = require('connect-mongo').default;

const flash = require('connect-flash')
const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')
const {middleWareGlobal,checkCsrfError,csfrMiddleware}= require('./src/middleware/middleware')
app.use(helmet())
app.use(express.urlencoded({extended:true }))
app.use(express.static(path.resolve(__dirname,'public')))

const sessionOptions = session({
    secret:'lll lll ll ll ll ',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    cookie:{
        maxAge: 1000*60*60*24*7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())
app.set('views', path.resolve(__dirname,'src','views'))
app.set('view engine', 'ejs')
app.use(csrf())
app.use(middleWareGlobal)
app.use(checkCsrfError)
app.use(csfrMiddleware)
app.use(routes)
app.on('Conexão Estabelecida', () => {
    app.listen(3000)
})
