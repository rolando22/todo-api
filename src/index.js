import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import './db/mongo/index.js';
import { AuthService } from './services/mongo/auth.service.js';
import { TodoService } from './services/mongo/todos.service.js';
import { UsersService } from './services/mongo/users.service.js';
// import { AuthService } from './services/local-file-system/auth.service.js';
// import { TodoService } from './services/local-file-system/todos.service.js';
// import { UsersService } from './services/local-file-system/users.service.js';
import { createAuthRouter } from './routes/auth.routes.js';
import { createTodoRouter } from './routes/todos.routes.js';
import { createUserRouter } from './routes/users.routes.js';
import { notFound } from './middlewares/notFound.js';
import { handlerError } from './middlewares/handlerError.js';

const PORT = config.port;

const app = express();

app.use(express.json());
app.use(cors());
app.disable('x-powered-by');

app.use('/api/auth', createAuthRouter({ authService: AuthService }));
app.use('/api/todos', createTodoRouter({ todoService: TodoService }));
app.use('/api/users', createUserRouter({ usersService: UsersService }));
app.use(notFound);

app.use(handlerError);

app.listen(PORT, () => {
	console.log(`Server listening at: http://localhost:${PORT}`);
});
 