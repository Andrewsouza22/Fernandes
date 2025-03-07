// Lista de produtos
const produtos = [
    {
        id: 1,
        nome: "Gola Polo - Tommy Hilfilger",
        preco: 120.00,
        imagem: "images/camisa-azul.jpg"
    },
    {
        id: 2,
        nome: "Moda Casual",
        preco: 139.99,
        imagem: "images/calca-jeans.jpg"
        
    },
    {
        id: 3,
        nome: "Nike Dunk The North Face",
        preco: 300.00,
        imagem: "images/sapato-preto.jpg"
    }
];

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

// Função para adicionar produto ao carrinho
function adicionarProdutoAoCarrinho(produto) {
    const carrinho = document.querySelector('.carrinho');
    const quantidade = parseInt(carrinho.textContent.match(/\d+/)[0]);
    carrinho.textContent = `Carrinho (${quantidade + 1})`;
}

// Função para remover produto do carrinho
function removerProdutoDoCarrinho(produto) {
    const carrinho = document.querySelector('.carrinho');
    const quantidade = parseInt(carrinho.textContent.match(/\d+/)[0]);
    carrinho.textContent = `Carrinho (${quantidade - 1})`;
}

// Função para comprar produto
function comprarProduto(produto) {
    adicionarProdutoAoCarrinho(produto);
    alert(`Você comprou o produto ${produto}!`);
}

// Adicionar evento de clique ao botão de comprar
document.querySelectorAll('.comprar').forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = botao.parentNode.querySelector('h3').textContent;
        comprarProduto(produto);
    });
});