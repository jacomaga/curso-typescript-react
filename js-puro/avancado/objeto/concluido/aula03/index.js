const produto = {nome:'Xícara', preco:23.4}
const outraCoisa = {...produto} //copiando 
const caneca = Object.assign({},produto,{material:'porcelana'})
console.log(caneca)
console.log(produto)

console.log(Object.getOwnPropertyDescriptor(produto,'nome'))