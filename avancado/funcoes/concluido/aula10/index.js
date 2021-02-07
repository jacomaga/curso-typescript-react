function* geradora1(){
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}

const g1 = geradora1()

for (i of g1){
    console.log(i)
}

function* gerador2(){
    let i = 1

    while(true){
        yield i
        if (i >= 50){
            return 
        }
        i++
    }
}
const g2 = gerador2()

for(i of g2){
    console.log(i)
}

function* geradora1(){
    yield* geradora1
    yield 5
    yield 6
}
