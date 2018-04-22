'use strict';

;(function () {
    var btnAjuda = document.querySelector('#btnAjuda');

    btnAjuda.addEventListener('click', function () {
        var ajudas = [{ conteudo: 'Bem vinde ao Ceep', cor: '#f05450' }, { conteudo: 'Clique no botão linhas para mudar o layout', cor: '#92C4EC' }];

        ajudas.forEach(function (ajuda) {
            adicionaCartaoNoMural(ajuda);
        });
    });

    btnAjuda.classList.remove('no-js');
})();