const array = [1,2,3]

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Alves',
    idade:19
}

function criaPessoa(nome,sobrenome,idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    }
}
function criaPessoaD(nome,sobrenome,idade){
    return{nome,sobrenome,idade,
    fala(){
        console.log('Olá Mundo!'+ `${this.nome}`)
    }}
}