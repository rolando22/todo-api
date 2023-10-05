export class UsersController {

	constructor({ usersService }) {
		this.usersService = usersService;
	}

	getTodosById = (req, res) => {
		const id = parseInt(req.params.id);
		const todos = this.usersService.getTodosById(id);
		res.status(200).json({ data: todos });
	};
}
