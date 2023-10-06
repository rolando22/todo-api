import z from 'zod';

const authScheman = z.object({
	email: z.string().email(), 
	password: z.string(),
});

export function validationAuth(object) {
	return authScheman.safeParse(object);
}
