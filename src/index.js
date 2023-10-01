import express from 'express';
import { TodoService } from './services/local-file-system/todos.service.js';
import { AuthService } from './services/local-file-system/auth.service.js';
import { createTodoRouter } from './routes/todos.routes.js';
import { createAuthRouter } from './routes/auth.routes.js';

const PORT = process.env.PORT || 3004;

const app = express();

app.use(express.json());

app.use('/api/todos', createTodoRouter({ todoService: TodoService }));
app.use('/api/auth', createAuthRouter({ authService: AuthService }));

app.listen(PORT, () => {
	console.log(`Server listening at: http://localhost:${PORT}`);
});
 