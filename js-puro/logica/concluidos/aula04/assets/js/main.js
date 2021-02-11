const form = document.querySelector('#form')
const resultado = document.querySelector('#resultado')

form.addEventListener('submit',function(event){
    event.preventDefault()

    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    let imc = peso / altura ** 2
    
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}`

})