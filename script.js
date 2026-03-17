// pega o botão
const botao = document.querySelector("#botaoSinopse");

// pega o texto da sinopse
const sinopse = document.querySelector("#sinopse");

// quando clicar no botão
botao.addEventListener("click", function() {

  // se estiver escondido, mostra
  if (sinopse.style.display === "none") {
    sinopse.style.display = "block";
    sinopse.style.color = "blue"; // muda cor
  } 
  // se estiver visível, esconde
  else {
    sinopse.style.display = "none";
  }

});