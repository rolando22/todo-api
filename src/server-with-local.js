import { createApp } from './index.js';
import { AuthService } from './services/local-file-system/auth.service.js';
import { TodoService } from './services/local-file-system/todos.service.js';
import { UsersService } from './services/local-file-system/users.service.js';

createApp({ authService: AuthService, todoService: TodoService, usersService: UsersService });
