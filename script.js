console.log("O JavaScript está funcionando!");
const botao = document.getElementById("botaoSinopse");
const sinopse = document.getElementById("sinopse");

botao.addEventListener("click", function() {
    if (sinopse.style.display === "none") {
        sinopse.style.display = "block";
    } else {
        sinopse.style.display = "none";
    }
});