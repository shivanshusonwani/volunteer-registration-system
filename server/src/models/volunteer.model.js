import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
			trim: true,
		},

		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},

		phone: {
			type: String,
			required: true,
		},

		city: {
			type: String,
			default: '',
		},

		occupation: {
			type: String,
			default: '',
		},

		motivation: {
			type: String,
			default: '',
		},

		status: {
			type: String,
			enum: ['PENDING', 'APPROVED', 'REJECTED'],
			default: 'PENDING',
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model('Volunteer', volunteerSchema);
