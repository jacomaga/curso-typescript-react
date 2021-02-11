const nomes = ['João','Mauro','Marcos'] // ou new Array('João','Mauro','Marcos')
delete nomes[2]
const novo = [...nomes] //assim as alterações da var novo não reflete na da variavel que ele copiou
novo.pop()
//split(' ') separa uma frase em array, join(' ') une uma array com o caracter passado como argumento
console.log(nomes)