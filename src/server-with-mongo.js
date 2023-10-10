import { createApp } from './index.js';
import './db/mongo/index.js';
import { AuthService } from './services/mongo/auth.service.js';
import { TodoService } from './services/mongo/todos.service.js';
import { UsersService } from './services/mongo/users.service.js';

createApp({ authService: AuthService, todoService: TodoService, usersService: UsersService });
