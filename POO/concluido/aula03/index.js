class DispositivoEletronico(){
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }
    ligar(){
        if(this.ligado){
            console.log('Já ligado')
            return 
        }
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log('Já ligado')
            return 
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}