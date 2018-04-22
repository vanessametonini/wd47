;(function() {
    const btnAjuda = document.querySelector('#btnAjuda')

    btnAjuda.addEventListener('click', function(){
        const ajudas = [
            'Bem vinde ao Ceep'
            ,'Clique no botão linhas para mudar o layout'
        ]

        ajudas.forEach(function(ajuda) {
            alert(ajuda)
        })
    })

    btnAjuda.classList.remove('no-js')

})()