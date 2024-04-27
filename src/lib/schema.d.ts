export const LoginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6, "Password must be at least 8 characters"),
});
