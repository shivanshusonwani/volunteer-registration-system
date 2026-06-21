import Volunteer from '../models/volunteer.model.js';

export const applyVolunteer = async (req, res) => {
	try {
		const { fullName, email, phone, city, occupation, motivation } =
			req.body;

		const volunteerExists = await Volunteer.findOne({
			email,
		});

		if (volunteerExists) {
			return res.status(400).json({
				success: false,
				message: 'Application already submitted',
			});
		}

		const volunteer = await Volunteer.create({
			fullName,
			email,
			phone,
			city,
			occupation,
			motivation,
		});

		return res.status(201).json({
			success: true,
			message: 'Volunteer application submitted',
			volunteer,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

export const getVolunteers = async (req, res) => {
	try {
		const volunteers = await Volunteer.find().sort({
			createdAt: -1,
		});

		return res.status(200).json({
			success: true,
			volunteers,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

export const getVolunteerById = async (req, res) => {
	try {
		const volunteer = await Volunteer.findById(req.params.id);

		if (!volunteer) {
			return res.status(404).json({
				success: false,
				message: 'Volunteer not found',
			});
		}

		return res.status(200).json({
			success: true,
			volunteer,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

export const updateVolunteerStatus = async (req, res) => {
	try {
		const { status } = req.body;

		const volunteer = await Volunteer.findByIdAndUpdate(
			req.params.id,
			{ status },
			{ new: true },
		);

		if (!volunteer) {
			return res.status(404).json({
				success: false,
				message: 'Volunteer not found',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Volunteer updated successfully',
			volunteer,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

export const deleteVolunteer = async (req, res) => {
	try {
		const volunteer = await Volunteer.findByIdAndDelete(req.params.id);

		if (!volunteer) {
			return res.status(404).json({
				success: false,
				message: 'Volunteer not found',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Volunteer deleted successfully',
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
