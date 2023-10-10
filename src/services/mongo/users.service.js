import { Todo } from '../../db/mongo/models/Todo.js';
import { User } from '../../db/mongo/models/User.js';

export class UsersService {

	static async getAll() {
		const users = await User.find({});
		return users;
	}

	static async getTodosById({ id }) {
		const todos = await Todo.find({ userId: id });
		return todos; 
	}

	static async create({ data }) {
		const newUser = new User({ ...data });
		newUser.password = await newUser.encryptPassword(data.password);
		const savedUser = await newUser.save();
		return savedUser;
	}

	static async delete({ id }) {
		const deletedUser = await User.findByIdAndDelete(id);
		if (!deletedUser) return null;
		return deletedUser;
	}
}
