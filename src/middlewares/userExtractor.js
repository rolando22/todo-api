import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';

export const authentication = (req, res, next) => {
	const authorization = req.get('authorization');
	let token = '';
	if (authorization && authorization.toLowerCase().startsWith('bearer')) {
		token = authorization.split(' ')[1];
	}
	const decodedToken = jwt.verify(token, config.jwtSecret);
	if (!token || !decodedToken.id) {
		return res.status(401).json({ error: 'token missing or invalid' });
	}
	const { id: userId } = decodedToken;
	req.userId = userId;
	next();
};
