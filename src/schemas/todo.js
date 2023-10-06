import z from 'zod';

const todoSchema = z.object({
	text: z.string(),
	completed: z.boolean(),
});

export function validateTodo(object) {
	return todoSchema.safeParse(object);
}

export function validatePartialTodo(object) {
	return todoSchema.partial().safeParse(object);
}
