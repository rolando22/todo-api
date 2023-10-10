const ERROR_HANDLERS = {  
	CastError: res => res.status(400).send({ error: 'id used is malformed' }),

	JsonWebTokenError: (res) => res.status(401).json({ error: 'token missing or invalid' }),
  
	TokenExpirerError: (res) => res.status(401).json({ error: 'token expired' }),

	SyntaxError: (res) => res.status(401).json({ error: 'token invalid' }),
  
	defaultError: (res, error) => {
		console.error(error.name);
		console.error(error);
		res.status(500).end();
	}
};

export const handlerError = (error, _req, res, _next) => {
	const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError;
	handler(res, error);
};
