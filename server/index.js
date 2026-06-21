import 'dotenv/config';
import app from './src/app.js';
import connectDB from './src/config/db.js';
import seedAdmin from './src/seed/seedAdmin.js';

const PORT = process.env.PORT || 8000;

const startServer = async () => {
	try {
		await connectDB();

		await seedAdmin();

		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

startServer();
