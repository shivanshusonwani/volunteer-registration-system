import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import volunteerRoutes from './routes/volunteer.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	}),
);

app.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Volunteer Management API',
	});
});

app.use('/api/auth', authRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/dashboard', dashboardRoutes);

export default app;
