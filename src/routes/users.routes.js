import { Router } from 'express';
import { UsersController } from '../controllers/users.controller.js';

export const createUserRouter = ({ usersService }) => {
	const router = Router();

	const usersController = new UsersController({ usersService });

	router.get('/:id/todos', usersController.getTodosById);

	return router;
};
