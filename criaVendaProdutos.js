document.getElementById('formVendaProdutos').addEventListener('submit', async function (e) {
    e.preventDefault();

    const produto = document.getElementById('produto').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;
    const estoque = document.getElementById('estoque').value;
    const categoria = document.getElementById('categoria').value;



    const response = await fetch('http://localhost:3000/vendaProdutos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ produto, descricao, preco, estoque, categoria })
    });

    const data = await response.json();

    if (response.ok) {
        document.getElementById('message').textContent = 'Venda de produto cadastrada!';
        document.getElementById('formVendaProdutos').reset();
    } else {
        document.getElementById('message').textContent = 'Erro: ' + data.error;
    }
});


