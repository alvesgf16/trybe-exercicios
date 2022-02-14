SELECT * FROM sakila.staff;
SELECT * FROM sakila.film_actor;

SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name), f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id
GROUP BY a.actor_id, f.film_id;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;

SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name), c.email, a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY CONCAT(c.first_name, ' ', c.last_name) DESC
LIMIT 100;

SELECT CONCAT(c.first_name, ' ', c.last_name), c.email, a.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND CONCAT(c.first_name, ' ', c.last_name) LIKE '%RENE%';

SELECT CONCAT(c.first_name, ' ', c.last_name), COUNT(a.address_id)
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY CONCAT(c.first_name, ' ', c.last_name)
ORDER BY CONCAT(c.first_name, ' ', c.last_name) DESC;

SELECT s.first_name, s.last_name, AVG(p.amount)
FROM sakila.staff AS s
INNER JOIN sakila.payment as p
ON s.staff_id = p.staff_id
GROUP BY s.first_name, s.last_name;

SELECT fa.actor_id, CONCAT(a.first_name, ' ', a.last_name), fa.film_id, f.title
FROM sakila.film_actor AS fa
INNER JOIN sakila.actor AS a ON fa.actor_id = a.actor_id
INNER JOIN sakila.film AS f ON fa.film_id = f.film_id;