//construtora sempre inicia com maiúscula

function Pessoa(nome, sobrenome){
    //atributos/metodos internos
    const ID = 3377
    const metodoInterno = function(){

    }
    //atributos/métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ': sou um método!')
    }
}

const p1 = new Pessoa('Mário','Gomes')
console.log(p1.nome)