 function retornaFuncao(){
     const nome = 'Joao'
     return function(){
         return nome
     }
 }

 const funcao = retornaFuncao()

 console.log(funcao())