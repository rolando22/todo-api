import { validatePartialTodo } from '../schemas/todo.js';

export class TodoController {

	constructor({ todoService }) {
		this.todoService = todoService;
	}

	getAll = async (_req, res) => {
		const todos = await this.todoService.getAll();
		res.status(200).json({
			data: todos,
		});
	};

	getById = async (req, res, next) => {
		try {
			const { id } = req.params;
			const todo = await this.todoService.getById({ id });
			if (!todo) return res.status(404).json({ message: 'Todo not found' });
			res.status(200).json({
				data: todo,
			});
		} catch (error) {
			next(error);
		}
	};

	create = async (req, res, next) => {
		try {
			const result = validatePartialTodo(req.body);
			if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) });
			const { userId } = req;
			const newTodo = await this.todoService.create({ data: result.data, userId });
			res.status(201).json({
				message: 'Todo created',
				data: newTodo,
			});
		} catch (error) {
			next(error);
		}
	};

	update = async (req, res, next) => {
		try {
			const result = validatePartialTodo(req.body);
			if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) });
			const { id } = req.params;
			const { userId } = req;
			const updateTodo = await this.todoService.update({ id, data: result.data, userId});
			if (!updateTodo) return res.status(404).json({ message: 'Todo not found' });
			res.status(200).json({
				message: 'Todo updated',
				data: updateTodo,
			});
		} catch (error) {
			next(error);
		}
	};

	delete = async (req, res, next) => {
		try {
			const { id } = req.params;
			const { userId } = req;
			const deleteTodo = await this.todoService.delete({ id, userId });
			if (!deleteTodo) return res.status(404).json({ message: 'Todo not found' });
			res.status(200).json({
				message: 'Todo deleted',
				data: deleteTodo,
			});
		} catch (error) {
			next(error);
		}
	};
}
