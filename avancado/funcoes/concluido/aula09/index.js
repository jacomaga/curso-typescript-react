function recursiva(max){
    if (max < 10){
        console.log(max)
        max ++
        recursiva(max)
    }else{
        return console.log('Acabou')
    }
}
recursiva(0)