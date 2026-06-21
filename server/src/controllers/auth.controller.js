import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: 'Email and password are required',
			});
		}

		const user = await User.findOne({ email });

		if (!user) {
			return res.status(401).json({
				success: false,
				message: 'Invalid credentials',
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(401).json({
				success: false,
				message: 'Invalid credentials',
			});
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: '7d',
		});

		res.cookie('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			maxAge: 7 * 24 * 60 * 60 * 1000,
			sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
		});

		return res.status(200).json({
			success: true,
			message: 'Login successful',
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
			},
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

export const logout = (req, res) => {
	res.clearCookie('token');

	return res.status(200).json({
		success: true,
		message: 'Logout successful',
	});
};

export const me = async (req, res) => {
	return res.status(200).json({
		success: true,
		user: req.user,
	});
};
