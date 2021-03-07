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

const routes = require('./routes')
const path = require('path')
const middleWareGlobal = require('./src/middleware/middleware')

app.use(express.urlencoded({extended:true  }))
app.use(express.static(path.resolve(__dirname,'public')))
app.set('views', path.resolve(__dirname,'src','views'))
app.set('view engine', 'ejs')
app.use(middleWareGlobal)
app.use(routes)
app.on('Conexão Estabelecida', () => {
    app.listen(3000)
    console.log('Conexão estabelecida')
})
