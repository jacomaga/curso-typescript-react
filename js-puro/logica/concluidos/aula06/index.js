const data = new Date(-99999999999999)
console.log(data.toString())  
data.getDate()
data.getMonth()
data.getFullYear()
data.getHours()
data.getMinutes()
data.getSeconds()
data.getMilliseconds()
data.getDay()

function formataNum(num){
    return num >= 10 ? num : `0${num}` 
}
function formataData(data){

    const dia = formataNum(data.getDate())
    const mes = formataNum(data.getMonth()+1)
    const ano = formataNum(data.getFullYear())
    const hora = formataNum(data.getHours())
    const min = formataNum(data.getMinutes())
    const seg = formataNum(data.getSeconds())
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
console.log(formataData(new Date()))