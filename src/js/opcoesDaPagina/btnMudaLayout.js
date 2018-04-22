const btn = document.querySelector('#btnMudaLayout')

btn.classList.remove('no-js')

function mudaTexto() {
    if(btn.textContent == 'Blocos'){
        btn.textContent = 'Linhas'
    }
    else{
        btn.textContent = 'Blocos'
    }
}
btn.addEventListener('click', mudaTexto)

const mural = document.querySelector('.mural')
function mudaLayout() {
    mural.classList.toggle('mural--linha')
}
btn.addEventListener('click', mudaLayout)   