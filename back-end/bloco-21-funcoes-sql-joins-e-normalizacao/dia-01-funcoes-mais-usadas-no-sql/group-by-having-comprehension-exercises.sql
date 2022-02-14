SELECT * FROM sakila.customer;

SELECT IF (active = 1, 'active', 'inactive') AS 'active', COUNT(*) FROM sakila.customer GROUP BY active;

SELECT store_id, IF (active = 1, 'active', 'inactive') AS 'active', COUNT(*) FROM sakila.customer
	GROUP BY store_id, active ORDER BY active, store_id;
    
SELECT rating, AVG(rental_duration) FROM sakila.film GROUP BY rating ORDER BY AVG(rental_duration) DESC;

SELECT district, COUNT(address) FROM sakila.address GROUP BY district ORDER BY COUNT(address) DESC;

SELECT rating, AVG(length) AS 'avg length/rating'
    FROM sakila.film
    GROUP BY rating
    HAVING AVG(length) BETWEEN 115.0 AND 121.50
    ORDER BY AVG(length) DESC;
    
SELECT rating, SUM(replacement_cost) 'total replacement cost/rating'
	FROM sakila.film
	GROUP by rating
    HAVING SUM(replacement_cost) > 3950.50
    ORDER BY SUM(replacement_cost) ASC;