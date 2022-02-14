USE sakila;
SELECT * FROM customer
	WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT * FROM customer
	WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
    ORDER BY first_name, last_name ASC;
SELECT title, description, release_year, replacement_cost FROM film
	WHERE rating ='G' AND replacement_cost > 18
    ORDER BY replacement_cost DESC, title ASC
    LIMIT 100;
SELECT COUNT(customer_id) FROM customer
	WHERE store_id = 1 AND active = 1;
SELECT * FROM customer
	WHERE store_id <> 1 || active <> 1;
SELECT * FROM film
	WHERE rating = 'NC-17'
    ORDER BY rental_rate ASC, title ASC
    LIMIT 50;