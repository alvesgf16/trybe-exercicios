SELECT 'Gabriel';
SELECT 'Gabriel', 'Alves', 'Aracaju', '27';
SELECT 'Gabriel' AS nome, 'Alves' AS sobrenome, 'Aracaju' AS 'cidade natal', 27 AS idade;
SELECT 13 * 8;
SELECT current_timestamp() AS 'Data Atual';

USE sakila;
SELECT * FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;
SELECT title, description, release_year FROM film;