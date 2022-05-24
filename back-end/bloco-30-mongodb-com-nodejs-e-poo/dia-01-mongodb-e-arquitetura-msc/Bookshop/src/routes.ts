import { Router } from 'express';

import BookController from './controllers/BookController';
import MovieController from './controllers/MovieController';

const bookController = new BookController();
const movieController = new MovieController();

const routes = Router();

const booksId = '/books/:id';

routes.get('/books', bookController.getAll);
routes.post('/books', bookController.create);
routes.put(booksId, bookController.update);
routes.delete(booksId, bookController.delete);
routes.get(booksId, bookController.getById);

routes.get('/movies', movieController.getAll);

export default routes;