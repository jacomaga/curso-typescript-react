const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true  }))
app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/contato',(req,res) =>{
    res.send('Olá, contato')
})
app.get('/perfil/:idUsuario?',(req,res)=>{
    console.log(req.params)
    res.send(req.params.idUsuario)
})
app.listen(3000)