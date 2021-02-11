function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco*(percentual/100))
}

Produto.prototype.aumento = function(valor){
    this.preco += valor
}

function Camiseta(nome, preco,cor){
    Produto.call(this,nome,preco)
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const regata = new Camiseta('Regata',7.5,'Preta')
regata.aumento(10)