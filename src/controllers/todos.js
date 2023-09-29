export class TodoController {

	constructor({ todoService }) {
		this.todoService = todoService;
	}

	getAll = (req, res) => {
		const todos = this.todoService.getAll();
		res.status(200).json({
			data: todos,
		});
	};

	getById = (req, res) => {
		const id = parseInt(req.params.id);
		const todo = this.todoService.getById(id);
		if (!todo) return res.status(404).json({ message: 'Todo not found' });
		res.status(200).json({
			data: todo,
		});
	};

	create = (req, res) => {
		const { text } = req.body;
		const newTodo = this.todoService.create({ text });
		res.status(201).json({
			message: 'Todo created',
			data: newTodo,
		});
	};

	update = (req, res) => {
		const id = parseInt(req.params.id);
		const { text, completed } = req.body;
		const updateTodo = this.todoService.update(id, { text, completed });
		if (!updateTodo) return res.status(404).json({ message: 'Todo not found' });
		res.status(200).json({
			message: 'Todo updated',
			data: updateTodo,
		});
	};

	delete = (req, res) => {
		const id = parseInt(req.params.id);
		const deleteTodo = this.todoService.delete(id);
		if (!deleteTodo) return res.status(404).json({ message: 'Todo not found' });
		res.status(200).json({
			message: 'Todo delete',
			data: deleteTodo,
		});
	};
}
