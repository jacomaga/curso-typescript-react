// Getter & Setters

function Produto(nome,preco,estoque){
    
    Object.defineProperty(this,'estoque',{
        enumerable: true,
        configurable: true,
        get: function(){
            return estoque
        },
        set: function(valor){
            if (typeof valor == 'number'){
               estoque = valor 
            }
        }
    })
   
}

const p1 = new Produto('Pano',22,23)

p1.estoque = 44
console.log(p1.estoque)