import { Todo } from '../../db/mongo/models/Todo.js';

export class TodoService {

	static async getAll() {
		const todos = await Todo.find({});
		return todos;
	}

	static async getById({ id }) {
		const todo = await Todo.findById(id);
		if (!todo) return null;
		return todo;
	}

	static async create({ data, userId }) {
		const newTodo = new Todo({ 
			text: '',
			completed: false, 
			...data, 
			userId, 
		});
		const savedTodo = await newTodo.save();
		return savedTodo;
	}

	static async update({ id, data, userId }) {
		const updatedTodo = await Todo.findOneAndUpdate({ _id: id, userId }, { ...data }, { new: true });
		if (!updatedTodo) return null;
		return updatedTodo;
	}

	static async delete({ id, userId }) {
		const deletedTodo = await Todo.findOneAndDelete({ _id: id, userId });
		if (!deletedTodo) return null;
		return deletedTodo;
	}
}
