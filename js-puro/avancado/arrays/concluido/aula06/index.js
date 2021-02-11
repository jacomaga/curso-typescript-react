const numeros = [2,3,4,5,20,30,60,100,80]
const total = numeros.reduce(function(acumulador,valor){
    if(valor %2 === 0) acumulador +=valor
    return acumulador
})

const pessoas = [
    {nome: 'Luiz', idade:23},
    {nome: 'Luizzz', idade:62},
    {nome: 'Luiza', idade:15},
    {nome: 'Teresa', idade:32}
]

const maisVelhas = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})