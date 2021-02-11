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

// Promise.all .race .resolve .reject

const promises = 
    [ 
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 5000),
    esperaAi('Promise 3', 3000),
    esperaAi('Promise 4', 6000),
    ]


Promise.race(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(error){
        console.log(error)
    })

function baixaPagina(){
    const emCache = true
    
    if(emCache){
        return Promise.resolve('Página em cache')
    }else{
        return esperaAi('Baixa a pagina', 3000)
    }
}

baixaPagina()
.then(dadosPagina=>{
    console.log(dadosPagina)
})
.catch(e => console.log(e))