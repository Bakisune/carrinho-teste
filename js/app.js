let total = 0;
limpar ();

// função para adicionar produtos ao carrinho
function adicionar() {

    let produto = document.getElementById('produto').value;
    let nome = produto.split('-')[0];
    let valor = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value;

// determinar o valor pela quantidade de um determinado produto
    let preco = quantidade * valor;
// determina o valor total do carrinho
    let total = document.getElementById ('valor-total');
    total.textContent = `${preco}`;

    let carrinho = document.getElementById('lista-produtos');
    document.getElementById('quantidade').value = 0;
 
// adiciona as informações de quantidade,nome e preço do produto no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${preco}</span>
    </section>`;
}
// função para limpar o carrinho e o valor total dele
function limpar () {
total = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0,00';

}