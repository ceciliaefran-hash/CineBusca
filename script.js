// =========================
// BOTÃO SINOPSE (já estava ok)
// =========================
const botao = document.querySelector("#botaoSinopse");
const sinopse = document.querySelector("#sinopse");

botao.addEventListener("click", function () {
  if (sinopse.style.display === "none") {
    sinopse.style.display = "block";
    sinopse.style.color = "blue";
  } else {
    sinopse.style.display = "none";
  }
});


// =========================
// BUSCAR FILMES 🔍
// =========================

// pega o formulário
const form = document.querySelector("form");

// pega o input de busca
const inputBusca = document.querySelector("#busca");

// pega TODOS os cards (filmes e séries)
const cards = document.querySelectorAll(".card");

form.addEventListener("submit", function (event) {
  // 🚨 impede a página de recarregar
  event.preventDefault();

  // texto digitado (minúsculo)
  const texto = inputBusca.value.toLowerCase();

  // percorre todos os cards
  cards.forEach(function (card) {

    // pega o título do filme
    const titulo = card.innerText.toLowerCase();

    // verifica se contém o texto buscado
    if (titulo.includes(texto)) {
      card.parentElement.style.display = "block"; // mostra
    } else {
      card.parentElement.style.display = "none"; // esconde
    }

  });

});