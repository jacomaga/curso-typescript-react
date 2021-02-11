function criaCalculadora(){
    
    return{

        display: document.querySelector('.display'),

        inicia(){
            this.clickBotoes()
        },
        clickBotoes(){
            document.addEventListener('click',function(e){
                const el = e.target

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplays(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.limpar()
                }
                if(el.classList.contains('btn-del')){
                    this.remover()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizarOperacao()
                }
            }.bind(this))
        },
        btnParaDisplays(valor){
            this.display.value += valor
        },
        limpar(){
            this.display.value = ''
        },
        remover(){
            this.display.value = this.display.value.slice(0,-1)
        },
        realizarOperacao(){
            let valores =  this.display.value 

            try{

                if(!valores){
                    console.log('Operação Inválida')
                    return
                }
                valores = eval(valores)
                this.display.value = String(valores)

            }catch(e){
                console.log('Operação Inválida')
                return
            }
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()