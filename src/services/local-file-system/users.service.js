import { todos } from '../../mocks/todos.js';
import { users } from '../../mocks/users.js';

export class UsersService {

	static async getAll() {
		return users;
	}
    
	static getTodosById({ id }) {
		const todosById = todos.filter(todo => todo.userId === id);
		return todosById; 
	}

	static async create({ data }) {
		const newUser = { 
			id: (Math.max(...users.map(user => user.id)) + 1).toString(),
			...data, 
		};
		return newUser;
	}

	static async delete({ id }) {
		const userIndex = users.findIndex(user => user.id === id);
		if (userIndex === -1) return null;
		const [deleteUser] = users.splice(userIndex, 1);
		return deleteUser;
	}
}
