export class AuthController {

	constructor({ authService }) {
		this.authService = authService;
	}

	login = (req, res) => {
		const { email, password } = req.body;
		const user = this.authService.login({ email, password });
		if (!user) return res.status(401).json({ error: 'invalid user or password' });
		res.json({ 
			data: user, 
		});
	};
}
