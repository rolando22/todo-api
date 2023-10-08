const ERROR_HANDLERS = {  
	JsonWebTokenError: (res) => res.status(401).json({ error: 'token missing or invalid' }),
  
	TokenExpirerError: (res) => res.status(401).json({ error: 'token expired' }),

	SyntaxError: (res) => res.status(401).json({ error: 'token invalid' }),
  
	defaultError: (res, error) => {
		console.error(error.name);
		res.status(500).end();
	}
};

export const handlerError = (error, _req, res, _next) => {
	ERROR_HANDLERS[error.name](res, error) || ERROR_HANDLERS.defaultError(res, error);
};
