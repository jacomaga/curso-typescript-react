function promise(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Sou uma promessa :D')
            resolve()
        },2000)
    })
}

export default async function (){
    await promise()
    console.log('Terminou')
}