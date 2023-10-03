import jwt from 'jsonwebtoken';
import { config } from '../../config/index.js';
import { users } from '../../mocks/users.js';

export class AuthService {

	static login({ email, password }) {
		const user = users.find(user => user.email === email);
		const passwordCorrect = user === undefined ? false : user.password === password;
		if (!(user && passwordCorrect)) return null;
		const userForToken = {
			id: user.id,
			username: user.username,
		};
		const token = jwt.sign(userForToken, config.jwtSecret, { expiresIn: 1000 * 60 * 60 * 24 });
		delete user.password;
		return {
			...user,
			token,
		};
	}
}
