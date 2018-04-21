;(function() {

    const cartoes = document.querySelectorAll('.cartao')

    for(let j = 0; j < cartoes.length; j++){
        
        cartoes[j].addEventListener('focusin', function() {
            cartoes[j].classList.add('cartao--focado')
        })

        cartoes[j].addEventListener('focusout', function() {
            cartoes[j].classList.remove('cartao--focado')
        })

        cartoes[j].addEventListener('change', function mudaCor(event) {
            const elementoSelecionado = event.target
            const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')

            if(isRadioTipo){
                cartoes[j].style.backgroundColor = elementoSelecionado.value
            }

        })

        cartoes[j].addEventListener('keydown', function deixaClicarComEnter(event){
            if(event.target.classList.contains('opcoesDoCartao-opcao') && (event.key === 'Enter' || event.key === ' ')){
                event.target.click()
            }
        })

        cartoes[j].addEventListener('click', function () {
            const elementoSelecionado = event.target

            if (elementoSelecionado.classList.contains('opcoesDoCartao-remove')) {
                cartoes[j].classList.add('cartao--some')
                cartoes[j].addEventListener('transitionend', function (params) {
                    cartoes[j].remove()
                })
            }
        })
    }
    
})()