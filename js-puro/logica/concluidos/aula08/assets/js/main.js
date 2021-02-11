const element = document.getElementById('panel')
let date = new Date()

const body = document.querySelector('body')

function weekDay(num){
    let weekDayText;
   
    switch(num){
        case 0:
            weekDayText = 'Domingo'
            return weekDayText
        case 1:
            weekDayText = 'Segunda-feira'
            return weekDayText
        case 2:
            weekDayText = 'Terça-feira'
            return weekDayText
        case 3:
            weekDayText = 'Quarta-feira'
            return weekDayText
        case 4:
            weekDayText = 'Quinta-feira'
            return weekDayText
        case 5:
            weekDayText = 'Sexta-feira'
            return weekDayText
        case 6:
            weekDayText = 'Sábado'
            return weekDayText
        default:
            weekDayText = ''
            return weekDayText
    }}
function monthName(num){
    let weekDayText;
    
    switch(num){
        case 0:
            weekDayText = 'Janeiro'
            return weekDayText
        case 1:
            weekDayText = 'Fevereiro'
            return weekDayText
        case 2:
            weekDayText = 'Março'
            return weekDayText
        case 3:
            weekDayText = 'Abril'
            return weekDayText
        case 4:
            weekDayText = 'Maio'
            return weekDayText
        case 5:
            weekDayText = 'Junho'
            return weekDayText
        case 6:
            weekDayText = 'Julho'
            return weekDayText
        case 7:
            weekDayText = 'Agosto'
            return weekDayText
        case 8:
            weekDayText = 'Setembro'
            return weekDayText     
        case 9:
            weekDayText = 'Outubro'
            return weekDayText
        case 10:
            weekDayText = 'Novembro'
            return weekDayText    
        case 11:
            weekDayText = 'Dezembro'
            return weekDayText        
        default:
            weekDayText = ''
            return weekDayText
    }}

function dataForm(date){
    let dayWeek = weekDay(date.getDay())
    return `${dayWeek}, ${date.getDate()} de ${monthName(date.getMonth())} de ${date.getFullYear()} <br> ${date.getHours()}:${date.getMinutes()}`
}

element.innerHTML = dataForm(date)

//element.innerHTML = data.toLocaleDateString('pt-BR',{dateStyle:'full', timeStyle:'short'})