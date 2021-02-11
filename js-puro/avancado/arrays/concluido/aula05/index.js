const numeros = [2,3,4,5,20,30,60,100,80]
const dobrar = numeros.map(valor => valor*2)

const pessoas = [
    {nome: 'Luiz', idade:23},
    {nome: 'Luizzz', idade:62},
    {nome: 'Luiza', idade:15},
    {nome: 'Teresa', idade:32}
]

const nomes = pessoas.map(obj => obj.nome)
const idade = pessoas.map(obj =>  obj.idade)
console.log(idade)