let dados = [1,'aaa', true, null, 32.111]
console.log(dados[2])

dados.push('2221')
dados.unshift('aaa')
let removido = dados.pop()
//shift remove no inicio e pop no final
//delete dados[n] deixa o n lugar vazio
//pode usar o slice no array

console.log(dados)