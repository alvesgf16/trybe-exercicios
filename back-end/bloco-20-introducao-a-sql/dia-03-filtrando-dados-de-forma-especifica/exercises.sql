USE PecasFornecedores;
SELECT * FROM Pecas
	WHERE name LIKE 'GR%';
SELECT * FROM Fornecimentos
	WHERE peca = 2
    ORDER BY Fornecedor ASC;
SELECT peca, Preco, Fornecedor FROM Fornecimentos
	WHERE Fornecedor LIKE '%N%';
SELECT * FROM Fornecedores
	WHERE name LIKE '%LTDA%'
    ORDER BY name DESC;
SELECT COUNT(code) FROM Fornecedores
	WHERE code LIKE '%F%';
SELECT * FROM Fornecimentos
	WHERE Preco BETWEEN 15.01 AND 39.99
    ORDER BY Preco ASC;
SELECT COUNT(code) FROM Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';