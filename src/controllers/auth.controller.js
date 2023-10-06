import { validationAuth } from '../schemas/auth.js';

export class AuthController {

	constructor({ authService }) {
		this.authService = authService;
	}

	login = (req, res) => {
		const result = validationAuth(req.body);
		if (result.error) return res.status(400).json({ error: JSON.parse(result.error.message) });
		const user = this.authService.login({ email: result.data.email, password: result.data.password });
		if (!user) return res.status(401).json({ error: 'invalid user or password' });
		res.json({ 
			data: user, 
		});
	};
}
