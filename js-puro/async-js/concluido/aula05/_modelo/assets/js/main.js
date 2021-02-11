fetch('pagina1.html')
.then(resposta => {
    if (resposta >= 300) throw new Error('Error')
    return resposta.text()
}).then(html => console.log(html))
.catch(e => console.error(e))


document.addEventListener('click', e =>{
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        console.log('asdasd')
        carregaPagina(el)
    }
})

 async function carregaPagina(el){
    const href = el.getAttribute('href')
    const response = await fetch(href)
    if (response.status !== 200) throw new Error('404!')
    const html = await response.text()
    carregaResultado(html)
    console.log(el)
   
}

function carregaResultado(response){
    console.log(response)
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response 
}