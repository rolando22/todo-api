export class UsersController {

	constructor({ usersService }) {
		this.usersService = usersService;
	}

	getAll = async (_req, res, next) => {
		try {
			const users = await this.usersService.getAll();
			res.status(200).json(users);
		} catch (error) {
			next(error);
		}
	};

	getTodosById = async (req, res, next) => {
		try {
			const { userId } = req;
			const todos = await this.usersService.getTodosById({ id: userId });
			res.status(200).json({ data: todos });
		} catch (error) {
			next();
		}
	};

	delete = async (req, res, next) => {
		try {
			const { id } = req.params;
			const deletedUser = await this.usersService.delete({ id });
			if (!deletedUser) return res.status(404).json({ message: 'User not found' });
			res.status(200).json({
				message: 'User deleted',
				data: deletedUser,
			});
		} catch (error) {
			next(error);
		}
	};
}
