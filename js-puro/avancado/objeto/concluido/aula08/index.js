//superclass

function Conta(agencia,conta,saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo) {
        console.log('Saldo insuficiente')
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag./c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(11,22,10)

function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite 
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

Conta.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        console.log('Saldo insuficiente')
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}
conta1.depositar(500)
conta1.sacar(200000)