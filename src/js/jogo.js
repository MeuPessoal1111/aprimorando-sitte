function sumir(){
    let elemento = document.getElementById("nomeUsuario");
    elemento.value = "";
}

function colocarNome(texto){
    let elemento = document.getElementById("resposta")
    let escrito = document.getElementById("nomeUsuario").value

    elemento.innerHTML = (escrito)
}

// jogo do numero secreto shiuuu


let numeroSecreto = Math.floor(Math.random() * 100 + 1)
console.log(`Número secreto (debug): ${numeroSecreto}`)

let tentativas = 0

function mostrarDicas(texto) {
    let elemento = document.getElementById("reposta-dica")
    elemento.innerHTML = texto
}

function acionarNumero() {
    let textoInput = document.getElementById("colocarNumeroImput").value
    let numeroEscolhido = parseInt(textoInput)
    let conferencia = document.getElementById("conferencia")

    if (isNaN(numeroEscolhido)) {
        conferencia.innerHTML = "Por favor, digite um número válido!"
        return
    }

    tentativas++

    conferencia.innerHTML = `Você escolheu: ${numeroEscolhido}`

    if (numeroEscolhido === numeroSecreto) {
        mostrarNoP(`Parabéns! Você acertou o número secreto (${numeroSecreto}) com ${tentativas} tentativas!`)
    } else if (numeroEscolhido > numeroSecreto) {
        mostrarDicas(`O número secreto é MENOR do que ${numeroEscolhido}`)
    } else {
        mostrarDicas(`O número secreto é MAIOR do que ${numeroEscolhido}`)
    }
}

function mostrarNoP(texto){
    let elemento =document.getElementById("pResposta")
    elemento.innerHTML = texto
}

function limparCampo(){
    acionarNumero() 

}

