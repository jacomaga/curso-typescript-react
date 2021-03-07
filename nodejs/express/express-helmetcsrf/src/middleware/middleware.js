module.middlewareGlobal = (req,res,next) =>{
    res.locals.umaVariavelLocal = 'Este é o valord a variável local'
    next()
}

exports.checkCsrfError = (err,req,res,nex) =>{
    if (err && 'EBADCSRFTOKEN' === err.code )
    {
        return res.render('404')
    }
} 

exports.csfrMiddleware = (req, res, next){
    res.locals.csrfToken = req.csrfToken()
    next()
}