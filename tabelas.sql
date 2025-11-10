CREATE DATABASE api_crud;
USE api_crud;
CREATE TABLE ecommerceProdutos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto VARCHAR(150),
    descricao TEXT,
    preco DECIMAL(10,2),
    estoque INT,
    categoria VARCHAR(150)
);



