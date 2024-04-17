function verificaValorValido(chute) {
    const numero = +chute
    const gameOver = 'game over'

    if (chute == gameOver){
        document.body.innerHTML = `
        <h2>Fim de Jogo!</h2>
        <h3>O número secreto era: ${numeroSecreto}</h3>
        <h3>Clique no botão para jogar novamente</h3>
        <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>
        `
        document.body.style.backgroundColor = "black";
    }


    if (chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era: ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div> O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})