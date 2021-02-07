// Declaração de função (Function hoisting)
falaOi()
function falaOi(){
    console.log('Oi')
}

const souUmDado = function(){
    console.log('Sou um dado')
}
souUmDado()// é uma variável, não é uma function hoisting, então não pode ser chamada antes de ser declarada

function execFunction(funcao){
    console.log('Vou executar a função abaixo:')
    funcao()
}
execFunction(souUmDado)

//Arrow Function

const funcaoArrow = () =>{
    console.log('Sou uma arrow function')
}

funcaoArrow()