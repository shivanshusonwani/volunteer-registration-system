import Volunteer from '../models/volunteer.model.js';

export const getDashboardStats = async (req, res) => {
	try {
		const total = await Volunteer.countDocuments();

		const pending = await Volunteer.countDocuments({
			status: 'PENDING',
		});

		const approved = await Volunteer.countDocuments({
			status: 'APPROVED',
		});

		const rejected = await Volunteer.countDocuments({
			status: 'REJECTED',
		});

		return res.status(200).json({
			success: true,
			stats: {
				total,
				pending,
				approved,
				rejected,
			},
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
