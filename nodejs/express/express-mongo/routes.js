const express = require('express')
const route = express.Router()
const homeController = require('./src/controller/homeController')
const contatoController = require('./src/controller/contatoController')

function meuMiddleWare(req,res,next){
    rep.session = {nome:'João', sobrenome:"silva"}
    console.log('11')
    next()
}

route.get('/', homeController.paginaInicial) 
route.post('/', homeController.trataPost)
route.get('/contato', contatoController.paginaInicial)
module.exports = route