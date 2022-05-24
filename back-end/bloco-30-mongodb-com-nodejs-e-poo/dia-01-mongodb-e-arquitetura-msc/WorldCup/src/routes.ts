import { Router } from 'express';
import CupController from './controllers/CupController';

const cupController = new CupController();

const routes = Router();

routes.get('/', cupController.getAll);
routes.get('/:year', cupController.getByYear);

export default routes;