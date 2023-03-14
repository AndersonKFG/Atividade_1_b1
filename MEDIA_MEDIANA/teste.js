var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var button = document.querySelector('.button')
var resposta = document.querySelector('.resposta')



button.addEventListener('click', function(){
    function descobrirC() {
        let c = n1.value * 2 - n2.value
        return c
    }


    resposta.innerHTML = `C = ${descobrirC()}`
    resposta.style.padding = '10px';
    resposta.style.position = 'relative';
    resposta.style.width = '50%';
    resposta.style.textAlign = 'center';
})