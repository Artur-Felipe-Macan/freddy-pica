// pegando os elementos
const qtdCarrinho = document.getElementById('qtdCarrinho');
let carrinho = []



function adicionarCarrinho(identificador,nome,preco) {
    carrinho.push({identificador:identificador,nome:nome,preco:preco});
    console.log(carrinho);
}