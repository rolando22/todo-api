import jwt from 'jsonwebtoken';
import { User } from '../../db/mongo/models/User.js';
import { config } from '../../config/index.js';

export class AuthService {

	static async login({ email, password }) {
		const user = await User.findOne({ email });
		const passwordCorrect = user === undefined ? false : await user.matchPassword(password);
		if (!(user && passwordCorrect)) return null;
		const userForToken = {
			id: user.id,
			username: user.username,
		};
		const token = jwt.sign(userForToken, config.jwtSecret, { expiresIn: 1000 * 60 * 60 * 24 });
		return {
			user,
			token,
		};
	}
}
