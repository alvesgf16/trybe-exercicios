USE sakila;
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username) VALUES
	('Carmelo', 'Watts', 2, 1, 0, 'Carmelo');
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username) VALUES
	('Andre', 'Anthony', 1, 'Andre.Anthony@sakilastaff.com', 1, 1, 'Andre'),
    ('Anthony', 'Torres', '2', 'Anthony.Torres@sakilastaff.com', 2, 1, 'Anthony');
SELECT * FROM staff;

SELECT * FROM customer;
INSERT IGNORE INTO actor (first_name, last_name)
	SELECT first_name, last_name FROM customer
    LIMIT 5;
SELECT * FROM actor;

INSERT INTO category (name) VALUES ('Superhero'), ('Blockbuster'), ('Thriller');
SELECT * FROM category;

INSERT INTO store (manager_staff_id, address_id) VALUES (3, 3);
SELECT * FROM store;
