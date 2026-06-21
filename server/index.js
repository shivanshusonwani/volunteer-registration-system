import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 8000;

const startServer = () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

startServer();
