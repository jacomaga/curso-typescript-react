const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/contato',(req,res) =>{
    res.send('Olá, contato')
})

app.listen(3000)