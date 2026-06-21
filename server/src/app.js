import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Volunteer Management API',
	});
});

export default app;
