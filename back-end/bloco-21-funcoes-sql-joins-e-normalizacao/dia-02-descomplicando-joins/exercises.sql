USE Pixar;

SELECT * FROM BoxOffice;
SELECT * FROM Movies;
SELECT * FROM Theater;

SELECT movie.title, bo.domestic_sales, bo.international_sales
FROM Movies AS movie
INNER JOIN BoxOffice AS bo
ON movie.id = bo.movie_id;

SELECT movie.title, bo.domestic_sales + bo.international_sales
FROM Movies as movie
INNER JOIN BoxOffice AS bo
ON movie.id = bo.movie_id
WHERE bo.international_sales > bo.domestic_sales;

SELECT movie.title, bo.rating
FROM Movies as movie
INNER JOIN BoxOffice AS bo
ON movie.id = bo.movie_id
ORDER BY bo.rating DESC;

SELECT t.*, m.*
FROM Theater AS t
LEFT JOIN Movies AS m
ON t.id = m.theater_id
ORDER BY t.name ASC;

SELECT t.*, m.*
FROM Theater AS t
RIGHT JOIN Movies AS m
ON t.id = m.theater_id
ORDER BY t.name ASC;

SELECT movie.*, bo.rating
FROM Movies as movie
INNER JOIN BoxOffice AS bo
ON movie.id = bo.movie_id
WHERE rating > 8;