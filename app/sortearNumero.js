const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * ( (maiorValor+1) - menorValor ) + menorValor)
}

window.onload = function() {
    if (!localStorage.getItem("jaVisitou")) {
        alert("Seja bem vindo ao número secreto! \n \nINSTRUÇÕES: \nPara jogar, basta permitir o acesso do navegador ao microfone e chutar os números :) \n \nPara desistir e saber qual era o número, diga: game over. \n \nBom jogo! ;)");
        localStorage.setItem("jaVisitou", true);
    }
}

// console.log('Número secreto: ', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor