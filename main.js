let numeroSecreto, palpite, tentativas;

const mensagem = document.querySelector("#mensagens");

document.querySelector(".iniciar").addEventListener("click", (e) => {
    if(!document.querySelector("input[name='nivel']:checked")) {
        alert("Escolha um nível!");
        return;
    }

    numeroSecreto = Math.floor(Math.random() * 50) + 1;
    tentativas = Number(document.querySelector("input[name='nivel']:checked").value);
    document.querySelector("#tentativas").textContent = tentativas;
    mensagem.innerHTML = "";
    document.querySelector(".enviar").removeAttribute("disabled");
    document.querySelector("#numero").value = "";
    e.target.setAttribute("disabled", "disabled");
});

document.querySelector(".enviar").addEventListener("click", () => {

    palpite = Number(document.querySelector("#numero").value);

    tentativas--;

    document.querySelector("#tentativas").textContent = tentativas;

    if (numeroSecreto == palpite) {
        const paragrafo = document.createElement("p");
        paragrafo.textContent = palpite + ": parabéns você acertou o número secreto!";
        mensagem.append(paragrafo);
        document.querySelector(".enviar").setAttribute("disabled", "disabled");
        document.querySelector(".iniciar").removeAttribute("disabled");
        return;
    }
    else if (numeroSecreto < palpite) {
        const paragrafo = document.createElement("p");
        paragrafo.textContent = palpite + ": O número secreto é menor que seu palpite!";
        mensagem.append(paragrafo);
        document.querySelector("#numero").value= "";
    }
    else {
        const paragrafo = document.createElement("p");
        paragrafo.textContent = palpite + ": O número secreto é maior que seu palpite!";
        mensagem.append(paragrafo);
        document.querySelector("#numero").value= "";
    }

    if(tentativas == 0) {
        mensagem.innerHTML += "<p>QUE PENA VOCÊ PERDEU! O número secreto era " + numeroSecreto + "</p>";

        document.querySelector(".enviar").setAttribute("disabled", "disabled");
        document.querySelector(".iniciar").removeAttribute("disabled");
    }
});
