USE Pixar;

SELECT * FROM Movies;
INSERT IGNORE INTO Movies (title, director, year, length_minutes) VALUES
	('Monstros SA', 'Pete Docter', 2001, 92),
    ('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104);
    
SELECT * FROM BoxOffice;
INSERT IGNORE INTO BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES
	(9, 6.8, 450000000, 370000000);

SET SQL_SAFE_UPDATES = 0;
UPDATE Movies SET director = 'Andrew Staton' WHERE title = 'Procurando Nemo';

UPDATE Movies SET title = 'Ratatouille', year = 2007 WHERE id = 3;

INSERT IGNORE INTO BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES
	(8, 8.5, 300000000, 250000000),
    (10, 7.4, 460000000, 510000000),
    (11, 9.9, 460000000, 510000000);

DELETE FROM BoxOffice WHERE movie_id = 11;
DELETE FROM Movies WHERE title = 'WALL-E';

SELECT id FROM Movies WHERE director = 'Andrew Staton';
DELETE FROM BoxOffice WHERE movie_id IN (2, 9);
DELETE FROM Movies WHERE director = 'Andrew Staton';

	