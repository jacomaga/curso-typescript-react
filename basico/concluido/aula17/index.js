function saudacao(){
    console.log('Olá!')
}

function saudacaoNome(nome){
    return console.log('Olá, ' + nome + '!')
}

let raiz = (n) =>{
    return n  ** 0.5
}
raiz = (n) =>  n  ** 0.5
raiz = n =>  n  ** 0.5


saudacao()
saudacaoNome('João')
console.log(raiz(9))