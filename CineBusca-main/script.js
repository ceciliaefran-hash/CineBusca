// ===== BOTÃO DE SINOPSE =====
const botao = document.querySelector("#botaoSinopse");
const sinopse = document.querySelector("#sinopse");

// Adiciona evento apenas se existir na página
if (botao && sinopse) {
    botao.addEventListener("click", function () {
        if (sinopse.style.display === "none" || sinopse.style.display === "") {
            sinopse.style.display = "block";
            sinopse.style.color = "blue";
        } else {
            sinopse.style.display = "none";
        }
    });
}

//  BUSCA
const formBusca = document.querySelector("form");
const inputBusca = document.querySelector("#busca");

if (formBusca) {
    formBusca.addEventListener("submit", function (event) {
        event.preventDefault();

        const termoBusca = inputBusca.value.toLowerCase().trim();
        const colunas = document.querySelectorAll(".col-6, .col-md-4, .col-lg-3");

        colunas.forEach(function (coluna) {
            const card = coluna.querySelector(".card");
            if (!card) return;

            const titulo = card.innerText.toLowerCase();
            const imagemSrc = card.querySelector("img") 
                ? card.querySelector("img").src.toLowerCase() 
                : "";

            // Mostra ou esconde conforme a busca
            if (titulo.includes(termoBusca) || imagemSrc.includes(termoBusca)) {
                coluna.style.display = "block";

                // Ativa o slide se estiver no carousel
                const paiCarouselItem = coluna.closest(".carousel-item");
                if (paiCarouselItem) {
                    paiCarouselItem.classList.add("active");
                }
            } else {
                coluna.style.display = "none";
            }
        });

        // Recarrega se a busca estiver vazia
        if (termoBusca === "") {
            window.location.reload();
        }
    });
}

//  CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
    const meuCarrossel = document.querySelector("#carouselFilmes");

    if (meuCarrossel) {
        new bootstrap.Carousel(meuCarrossel, {
            interval: 3000,
            wrap: true,
            pause: 'hover'
        });
    }
});