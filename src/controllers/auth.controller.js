export class AuthController {

	constructor({ authService }) {
		this.authController = authService;
	}

	login = (req, res) => {
		const { username, password } = req.body;
		const user = this.authController.login({ username, password });
		if (!user) return res.status(401).json({ error: 'invalid user or password' });
		res.json({ 
			data: user, 
		});
	};
}
