import express from 'express';

const PORT = process.env.PORT || 3004;

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Hello, World</h1>');
});

app.listen(PORT, () => {
	console.log(`Server listening at: http://localhost:${PORT}`);
});
 