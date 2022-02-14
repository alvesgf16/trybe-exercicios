USE sakila;
SET SQL_SAFE_UPDATES = 0;
UPDATE actor SET first_name = 'JULES' WHERE first_name = 'JULIA';

UPDATE category SET name = 'Science Fiction' WHERE name = 'Sci-Fi';

UPDATE film SET rental_rate = 25 WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;
UPDATE film SET rental_rate = (
	CASE WHEN length BETWEEN 0 AND 100 THEN 10
		 WHEN length > 100 THEN 20
	END);
SET SQL_SAFE_UPDATES = 1;
SELECT * FROM film ORDER BY length;