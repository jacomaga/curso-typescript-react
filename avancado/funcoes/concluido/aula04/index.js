function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if (callback) callback()
    },600)
}
function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if (callback) callback()
    },300)
}

f1(function(){
    f2(function(){
        console.log('Olá Mundo')
    })
})