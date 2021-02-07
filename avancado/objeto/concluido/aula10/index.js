const pessoas = [{id:2, nome:'Dilma'},
{id: 3, nome:'Hugo'}]

const novasPessoas = new Map()
// for(const pessoa of pessoas){
//     const {id} = pessoa
//     novaPessoas[id] = {...pessoa}
// }

for(const pessoa of pessoas){
    const {id} = pessoa
    novaPessoas.set(id,{...pessoa})
}
console.log(novasPessoas)