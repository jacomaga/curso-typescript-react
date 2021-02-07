function criaPessoa(nome,sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log('Olá')
        },
        comer(){
            console.log('Comer')
        }
    }

    return Object.create(pessoaPrototype,{
        nome: {value:nome},
        sobrenome: {value:sobrenome}
    })
}

function criaPessoa2(nome,sobrenome){
    

    return Object.create(pessoaPrototype,{
        nome: {value:nome},
        sobrenome: {value:sobrenome}
    })
}

const acoes = {
    falar(){
        console.log('Olá')
    },
    comer(){
        console.log('Comer')
    }
}