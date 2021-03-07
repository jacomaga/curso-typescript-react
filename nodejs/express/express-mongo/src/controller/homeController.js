const HomeModel = require('../models/Home')

HomeModel.create({
    titulo:'Pecado Capital',
    descricao: 'Também são chamados de “mortais”, porque significariam a morte da alma – em contraste com os pecados veniais'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

exports.paginaInicial = (req,res) => {
    console.log(req.session)
    res.render('index')
}

exports.trataPost = (req,res) => {
      res.send('Postado')   
}