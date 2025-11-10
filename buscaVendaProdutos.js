async function listarTodos() {
    const buscaNoBancoDeDados = await fetch('http://localhost:3000/vendaProdutos');
    const respostaObtida = await buscaNoBancoDeDados.json();
    console.log(respostaObtida);
    let html = '<table border="1"><tr><th>id</th><th>produto</th><th>descricao</th><th>preco</th><th>estoque</th><th>categoria</th></tr>';

    respostaObtida.forEach(VendaProdutos => {
        html += `<tr>
        <td>${VendaProdutos.id}</td>
        <td>${VendaProdutos.produtos}</td>
        <td>${VendaProdutos.descricao}</td>
        <td>${VendaProdutos.preco}</td>
        <td>${VendaProdutos.estoque}</td>
        <td>${VendaProdutos.categoria}</td>
        </tr>`;
    });

    html += '</table>';
    document.getElementById('resultado').innerHTML = html;
}
