const express = require('express');
const cors = require('cors');
const acessaBancoNoServidor = require('./acessaBancoNoServidor');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Criar produto
app.post('/VendaProdutos', (req, res) => {
    const {produto, descricao, preco, estoque, categoria } = req.body;

    const codigoDoMySQL = 'INSERT INTO ecommerceProdutos (produto, descricao, preco, estoque, categoria) VALUES (?, ?, ?, ?, ?)';

    acessaBancoNoServidor.query(codigoDoMySQL, [produto, descricao, preco, estoque, categoria], (err, results) => {
        if (err) {
            return res.json({ error: 'Erro ao cadastrar' });
        }
        res.json({ message: 'Venda de produtos cadastrada!' });
    });
});

// Listar produtos
app.get('/vendaProdutos', (req, res) => {
    const codigoDoMySQL = 'SELECT * FROM ecommerceProdutos';

    acessaBancoNoServidor.query(codigoDoMySQL, (err, results) => {
        if (err) {
            return res.json({ error: 'Erro ao buscar' });
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
