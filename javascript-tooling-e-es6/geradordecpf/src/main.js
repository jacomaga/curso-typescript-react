import './assets/css/style.css'
import GeraCPF from './modules/GeraCPF'

(function(){
    const gerador = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gerador.geraNovoCpf()
})();