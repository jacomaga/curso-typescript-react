// defineProperty = defineProperties

function Produto(nome,preco,estoque){
    
    Object.defineProperty(this,'estoque',{
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: true
    })
    Object.defineProperties(this,{
        enumerable: true,
        value: nome,
        writable: false,
        configurable: true
    },
    {
        enumerable: true,
        value: preco,
        writable: false,
        configurable: true
    }
    )
}