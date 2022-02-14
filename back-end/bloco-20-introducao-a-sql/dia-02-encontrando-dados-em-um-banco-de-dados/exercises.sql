SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 10 + 15;
SELECT 1 + 1;

USE Scientists;
SELECT * FROM Scientists;
SELECT Name as 'Nome do Projeto', Hours as 'Tempo de Trabalho' FROM Projects;
SELECT Name FROM Scientists ORDER BY Name ASC;
SELECT Name FROM Projects ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') FROM Projects;
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM AssignedTo;
SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;
SELECT * FROM Projects ORDER BY Hours ASC LIMIT 5;
SELECT CONCAT('Existem ', COUNT(SSN), ' cientistas na tabela Scientists') FROM Scientists;