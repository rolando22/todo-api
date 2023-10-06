import { validatePartialTodo } from '../schemas/todo.js';

export class TodoController {

	constructor({ todoService }) {
		this.todoService = todoService;
	}

	getAll = (_req, res) => {
		const todos = this.todoService.getAll();
		res.status(200).json({
			data: todos,
		});
	};

	getById = (req, res) => {
		const id = parseInt(req.params.id);
		const todo = this.todoService.getById({ id });
		if (!todo) return res.status(404).json({ message: 'Todo not found' });
		res.status(200).json({
			data: todo,
		});
	};

	create = (req, res) => {
		const result = validatePartialTodo(req.body);
		if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) });
		const { userId } = req;
		const newTodo = this.todoService.create({ data: result.data, userId });
		res.status(201).json({
			message: 'Todo created',
			data: newTodo,
		});
	};

	update = (req, res) => {
		const result = validatePartialTodo(req.body);
		if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) });
		const id = parseInt(req.params.id);
		const { userId } = req;
		const updateTodo = this.todoService.update({ id, data: result.data, userId});
		if (!updateTodo) return res.status(404).json({ message: 'Todo not found' });
		res.status(200).json({
			message: 'Todo updated',
			data: updateTodo,
		});
	};

	delete = (req, res) => {
		const id = parseInt(req.params.id);
		const { userId } = req;
		const deleteTodo = this.todoService.delete({ id, userId });
		if (!deleteTodo) return res.status(404).json({ message: 'Todo not found' });
		res.status(200).json({
			message: 'Todo deleted',
			data: deleteTodo,
		});
	};
}
