import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';

export const createAuthRouter = ({ authService }) => {
	const router = Router();

	const authController = new AuthController({ authService });

	router.post('/login', authController.login);

	return router;
};
