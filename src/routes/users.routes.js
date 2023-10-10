import { Router } from 'express';
import { UsersController } from '../controllers/users.controller.js';
import { authentication } from '../middlewares/userExtractor.js';

export const createUserRouter = ({ usersService }) => {
	const router = Router();

	const usersController = new UsersController({ usersService });

	router.get('/', usersController.getAll);
	router.get('/todos', authentication, usersController.getTodosById);
	router.delete('/:id', usersController.delete);

	return router;
};
