for(let i = 0; i <= 10 ; i++){
    console.log(`Linha ${i}`)
}
const array = [1,2,3,4,5,6]

const pessoa  = {
    nome:'Luiz',
    sobrenome:'Otavio',
    idade:20
}

for (let item in array ){
    console.log(array[item])
}

for (let chave in pessoa ){
    console.log(chave, pessoa[chave])
}

const nome = 'jOÃO'

for(let valor of nome){
    console.log(valor)
}

array.forEach(function(valor, indice){ 
    console.log(valor, indice)
})