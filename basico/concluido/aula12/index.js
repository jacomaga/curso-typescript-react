let varA = 'A'
let varB = 'B'

let varC = 'C'

const temporaria = varA

varA = varB
varB = varC
varC = temporaria 

console.log(varA , varB , varC)

[varA,varB,varC] = [varB, varC, varA]

console.log(varA , varB , varC)

