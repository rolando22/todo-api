import { todos } from '../../mocks/todos.js';

export class TodoService {

	static getAll() {
		return todos;
	}

	static getById(id) {
		const todo = todos.find(todo => todo.id === id);
		return todo;
	}

	static create(data) {
		const newTodo = {
			id: Math.max(...todos.map(todo => todo.id)) + 1,
			completed: false,
			...data,
		};
		todos.push(newTodo);
		return newTodo;
	}

	static update(id, data) {
		const todoIndex = todos.findIndex(todo => todo.id === id);
		if (todoIndex === -1) return null;
		const updateTodo = {
			...todos[todoIndex],
			...data,
		};
		todos[todoIndex] = updateTodo;
		return updateTodo;
	}

	static delete(id) {
		const todoIndex = todos.findIndex(todo => todo.id === id);
		if (todoIndex === -1) return null;
		const [deleteTodo] = todos.splice(todoIndex, 1);
		return deleteTodo;
	}
}
