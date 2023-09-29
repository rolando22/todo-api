import express from 'express';
import { TodoService } from './services/local-file-system/todos.js';
import { createTodoRouter } from './routes/todos.js';

const PORT = process.env.PORT || 3004;

const app = express();

app.use(express.json());

app.use('/api/todos', createTodoRouter({ todoService: TodoService }));

app.listen(PORT, () => {
	console.log(`Server listening at: http://localhost:${PORT}`);
});
 