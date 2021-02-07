//filter, map, reduce

const numeros = [2,3,4,5,20,30,60,100,80]

const numFiltrados = numeros.filter(valor => valor > 10)

const pessoas = [
    {nome: 'Luiz', idade:23},
    {nome: 'Luizzz', idade:62},
    {nome: 'Luiza', idade:15},
    {nome: 'Teresa', idade:32}
]
const pessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 5)