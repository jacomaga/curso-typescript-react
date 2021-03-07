const {Pessoa} = require('./mod1')
const axios = require('axios')
const path  = require('path')
const p1 = new Pessoa('Hiago')
console.log(p1.nome)

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))