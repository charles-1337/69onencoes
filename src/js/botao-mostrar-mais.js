document.getElementById("mostrar-mais").addEventListener("click", function () {
    const produtosOcultos = document.querySelectorAll(".produto.oculto");
    const botao = this;

    // Verificar se os produtos ocultos estão visíveis ou não
    if (produtosOcultos[0].style.display === "block") {
        // Ocultar os produtos e alterar o texto do botão para "Mostrar Mais"
        produtosOcultos.forEach(function (produto) {
            produto.style.display = "none";
        });
        botao.textContent = "Mostrar Mais";
    } else {
        // Mostrar os produtos e alterar o texto do botão para "Mostrar Menos"
        produtosOcultos.forEach(function (produto) {
            produto.style.display = "block";
        });
        botao.textContent = "Mostrar Menos";
    }
});
