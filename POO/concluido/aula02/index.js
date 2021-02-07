const _velocidade = Symbol('_velocidade')
class Carro{
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }

    get velocidade(){
        return this.[_velocidade]
    }
    set velocidade(valor){
        this[_velocidade] = valor 
    }

    acelerar(){
        if(_velocidade > 100) return 
        this[_velocidade]++
    }
    freiar(){
        if(this._velocidade <= 0 ) return
        this[_velocidade]--
    }
}

const p1 = new Carro('Lamborghini')