exports.paginaInicial = (req,res) => {
    console.log(req.session)
    res.render('index')
}

exports.trataPost = (req,res) => {
      res.send('Postado')   
}