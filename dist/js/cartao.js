'use strict';

;(function () {

    var cartoes = document.querySelectorAll('.cartao');

    var _loop = function _loop(j) {

        cartoes[j].addEventListener('focusin', function () {
            cartoes[j].classList.add('cartao--focado');
        });

        cartoes[j].addEventListener('focusout', function () {
            cartoes[j].classList.remove('cartao--focado');
        });

        cartoes[j].addEventListener('change', function mudaCor(event) {
            var elementoSelecionado = event.target;
            var isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo');

            if (isRadioTipo) {
                cartoes[j].style.backgroundColor = elementoSelecionado.value;
            }
        });

        cartoes[j].addEventListener('keydown', function deixaClicarComEnter(event) {
            if (event.target.classList.contains('opcoesDoCartao-opcao') && (event.key === 'Enter' || event.key === ' ')) {
                event.target.click();
            }
        });

        cartoes[j].addEventListener('click', function () {
            var elementoSelecionado = event.target;

            if (elementoSelecionado.classList.contains('opcoesDoCartao-remove')) {
                cartoes[j].classList.add('cartao--some');
                cartoes[j].addEventListener('transitionend', function (params) {
                    cartoes[j].remove();
                });
            }
        });
    };

    for (var j = 0; j < cartoes.length; j++) {
        _loop(j);
    }
})();