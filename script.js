const { produtos } = require("./produtos");

// Função para gerar a lista de produtos
function gerarListaProdutos() {
    const listaProdutos = document.querySelector(".produtos ul");
    listaProdutos.innerHTML = "";

    produtos.forEach(produto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
        `;
        listaProdutos.appendChild(li);
    });
}

// Chamar a função para gerar a lista de produtos
gerarListaProdutos();