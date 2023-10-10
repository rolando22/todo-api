import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import { createAuthRouter } from './routes/auth.routes.js';
import { createTodoRouter } from './routes/todos.routes.js';
import { createUserRouter } from './routes/users.routes.js';
import { notFound } from './middlewares/notFound.js';
import { handlerError } from './middlewares/handlerError.js';

export function createApp({ authService, todoService, usersService }) {
	const PORT = config.port;

	const app = express();

	app.use(express.json());
	app.use(cors());
	app.disable('x-powered-by');

	app.use('/api/auth', createAuthRouter({ authService}));
	app.use('/api/todos', createTodoRouter({ todoService}));
	app.use('/api/users', createUserRouter({ usersService }));
	app.use(notFound);

	app.use(handlerError);

	app.listen(PORT, () => {
		console.log(`Server listening at: http://localhost:${PORT}`);
	});
}
 