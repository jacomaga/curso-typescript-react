const request = obj => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(obj.method, obj.url,true)
        xhr.send()
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            }else{
                reject(xhr.statusText)
            }
        })
    })
    
}
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
    console.log(el)
    const objMethod = {
        method:'GET',
        url: href
    }
   try{
    const response = await request(objMethod )
    carregaResultado(response)
   }catch(e){
       console.log(e)
   }
}

function carregaResultado(response){
    console.log(response)
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response 
}