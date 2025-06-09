let total = 0;
limpar ();

function adicionar() {

    let produto = document.getElementById('produto').value;
    let nome = produto.split('-')[0];
    let valor = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value;

    let preco = quantidade * valor;
    let total = document.getElementById ('valor-total');
    total.textContent = `${preco}`;

    let carrinho = document.getElementById('lista-produtos');
    document.getElementById('quantidade').value = 0;
 
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${preco}</span>
    </section>`;
}

function limpar () {
total = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0,00';

}