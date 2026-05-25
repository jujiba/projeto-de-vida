const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

if (botoes.length !== textos.length) {
  console.warn("Quantidade diferente de botões e textos de aba.", { botoes: botoes.length, textos: textos.length });
}

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      if (textos[j]) {
        textos[j].classList.remove("ativo");
      }
    }

    botoes[i].classList.add("ativo");
    if (textos[i]) {
      textos[i].classList.add("ativo");
    }
  };
}
const contadores = document.querySelectorAll(".contador");
contadores[0].textContent = "Contagem regressiva";