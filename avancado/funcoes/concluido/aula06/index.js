function criaPessoa(nome, sobrenome,idade){
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} está no assunto ${assunto}.`
        },
        idade,
        get anoNasc(){
            const anoAtual = 2020
            return anoAtual - this.idade
        }
        set alterarIdade(valor){
            this.idade = valor 
        }
    }
}
const p1 = criaPessoa('Luiz','Otavio',20)
console.log(p1.fala('JS'))
p1.imc