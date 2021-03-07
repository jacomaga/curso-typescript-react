module.exports = (req,res,next) =>{
    res.locals.umaVariavelLocal = 'Este é o valord a variável local'
    next()
}