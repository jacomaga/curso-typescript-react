const HomeModel = require('../models/Home')

// HomeModel.create({
//     titulo:'Pecado Capital',
//     descricao: 'Também são chamados de “mortais”, porque significariam a morte da alma – em contraste com os pecados veniais'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))

exports.paginaInicial = (req,res) => {
    res.render('index',{
        titulo: 'Este é o título da página',
        numeros: [0,1,2,3,4,5,6]
    })
    return console.log('renderizado')
     
}

exports.trataPost = (req,res) => {
      res.send('Postado')   
      return 
}