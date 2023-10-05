import { todos } from '../../mocks/todos.js';

export class UsersService {
    
	static getTodosById(id) {
		const todosById = todos.filter(todo => todo.userId === id);
		return todosById; 
	}
}
