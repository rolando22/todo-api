import express from 'express';
import cors from 'cors';
import { TodoService } from './services/local-file-system/todos.service.js';
import { UsersService } from './services/local-file-system/users.service.js';
import { AuthService } from './services/local-file-system/auth.service.js';
import { createTodoRouter } from './routes/todos.routes.js';
import { createUserRouter } from './routes/users.routes.js';
import { createAuthRouter } from './routes/auth.routes.js';
import { notFound } from './middlewares/notFound.js';

const PORT = process.env.PORT || 3004;

const app = express();

app.use(express.json());
app.use(cors());
app.disable('x-powered-by');

app.use('/api/todos', createTodoRouter({ todoService: TodoService }));
app.use('/api/users', createUserRouter({ usersService: UsersService }));
app.use('/api/auth', createAuthRouter({ authService: AuthService }));
app.use(notFound);

app.listen(PORT, () => {
	console.log(`Server listening at: http://localhost:${PORT}`);
});
 