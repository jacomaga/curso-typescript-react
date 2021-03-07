const express = require('express')
const route = express.Router()
const homeController = require('./controller/homeController')
const contatoController = require('./controller/contatoController')


route.get('/', homeController.paginaInicial) 
route.post('/', homeController.trataPost)
route.get('/contato', contatoController.paginaInicial)
module.exports = route