function funcao(){
    console.log(arguments)
}

funcao(1,2,3,4,5,6,7,'Argumentos!')

function soma(a,b=0){
    console.log(a+b) //Caso algum dos argumentos não sejam declarados, você pode colocar um valor default para os argumentos
}
soma(2)

function apresentacao({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade)
}

let obj  = {nome:'João', sobrenome:'Jairo', idade:30}

apresentacao(obj)

function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero 
    }
    console.log(acumulador)
}

conta('*',0,20,30,40,50)