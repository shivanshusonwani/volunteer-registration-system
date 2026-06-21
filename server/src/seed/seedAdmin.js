import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

const seedAdmin = async () => {
	try {
		const adminExists = await User.findOne({
			email: process.env.ADMIN_EMAIL,
		});

		if (adminExists) {
			console.log('Admin already exists');
			return;
		}

		const hashedPassword = await bcrypt.hash(
			process.env.ADMIN_PASSWORD,
			10,
		);

		await User.create({
			name: 'NayePankh Admin',
			email: process.env.ADMIN_EMAIL,
			password: hashedPassword,
			role: 'ADMIN',
		});

		console.log('Admin seeded successfully');
	} catch (error) {
		console.error('Admin seeding failed:', error.message);
	}
};

export default seedAdmin;
