import { Router } from 'express';
import { TodoController } from '../controllers/todos.js';

export const createTodoRouter = ({ todoService }) => {
	const router = Router();

	const todoController = new TodoController({ todoService });
    
	router.get('/', todoController.getAll);
	router.get('/:id', todoController.getById);
	router.post('/', todoController.create);
	router.patch('/:id', todoController.update);
	router.delete('/:id', todoController.delete);
    
	return router;
};


