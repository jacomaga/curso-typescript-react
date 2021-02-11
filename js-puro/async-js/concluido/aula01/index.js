function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        if (typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(()=>{
            resolve(msg)
        },tempo)
    })   
} 
function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random()*(max-min) + min) 
}

esperaAi('Frase 1', rand(1,3)).then(resposta => {
    console.log(resposta)
    return esperaAi('Frase 2', rand(1,3))
}).then(resposta =>{
    console.log(resposta)
    return esperaAi('Frase 3', rand(1,3))
}).then(resposta =>{
    console.log(resposta)
    return esperaAi(3, rand(1,3))
}).catch(e => {
    console.log ('Erro: ', e)
})
