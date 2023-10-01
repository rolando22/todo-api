import { Router } from 'express';
import { TodoController } from '../controllers/todos.controller.js';
import { authentication } from '../middlewares/userExtractor.js';

export const createTodoRouter = ({ todoService }) => {
	const router = Router();

	const todoController = new TodoController({ todoService });
    
	router.get('/', todoController.getAll);
	router.get('/:id', todoController.getById);
	router.post('/', authentication, todoController.create);
	router.patch('/:id', authentication, todoController.update);
	router.delete('/:id', authentication, todoController.delete);
    
	return router;
};
