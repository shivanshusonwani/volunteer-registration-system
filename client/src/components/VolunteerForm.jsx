import { useState } from 'react';
import { createVolunteer } from '../api/volunteerApi';
import {
	FiUser,
	FiMail,
	FiPhone,
	FiMapPin,
	FiBriefcase,
	FiHeart,
	FiCheckCircle,
	FiAlertCircle,
} from 'react-icons/fi';

function VolunteerForm() {
	const [form, setForm] = useState({
		fullName: '',
		email: '',
		phone: '',
		city: '',
		occupation: '',
		motivation: '',
	});

	const [status, setStatus] = useState({
		loading: false,
		success: false,
		error: null,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus({ loading: true, success: false, error: null });

		if (!form.fullName || !form.email || !form.phone) {
			setStatus({
				loading: false,
				success: false,
				error: 'Full Name, Email, and Phone are required.',
			});
			return;
		}

		try {
			const res = await createVolunteer(form);
			if (res.data.success) {
				setStatus({ loading: false, success: true, error: null });
				setForm({
					fullName: '',
					email: '',
					phone: '',
					city: '',
					occupation: '',
					motivation: '',
				});
			} else {
				setStatus({
					loading: false,
					success: false,
					error: res.data.message || 'Something went wrong.',
				});
			}
		} catch (err) {
			console.error(err);
			const message =
				err.response?.data?.message ||
				'Failed to submit application. Please try again.';
			setStatus({ loading: false, success: false, error: message });
		}
	};

	if (status.success) {
		return (
			<div className='bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-emerald-100 shadow-xl text-center max-w-lg mx-auto transform animate-fade-in-up duration-300'>
				<div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 mb-6'>
					<FiCheckCircle className='w-8 h-8' />
				</div>
				<h3 className='text-2xl font-bold text-gray-800 mb-2'>
					Application Submitted!
				</h3>
				<p className='text-gray-600 mb-6'>
					Thank you for your interest in volunteering with NayePankh
					Foundation. We have received your details and our team will
					review your application soon.
				</p>
				<button
					onClick={() =>
						setStatus({
							loading: false,
							success: false,
							error: null,
						})
					}
					className='px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition duration-200 cursor-pointer'
				>
					Submit Another Application
				</button>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-5 bg-white/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xl max-w-xl mx-auto transition duration-300'
		>
			{status.error && (
				<div className='flex items-center gap-3 p-4 rounded-xl bg-rose-50 text-rose-700 text-sm border border-rose-100 animate-shake'>
					<FiAlertCircle className='w-5 h-5 shrink-0' />
					<span>{status.error}</span>
				</div>
			)}

			<div>
				<label className='block text-sm font-medium text-gray-700 mb-1.5'>
					Full Name *
				</label>
				<div className='relative'>
					<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400'>
						<FiUser />
					</div>
					<input
						type='text'
						name='fullName'
						value={form.fullName}
						onChange={handleChange}
						required
						placeholder='John Doe'
						className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200'
					/>
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1.5'>
						Email Address *
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400'>
							<FiMail />
						</div>
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							required
							placeholder='john@example.com'
							className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200'
						/>
					</div>
				</div>

				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1.5'>
						Phone Number *
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400'>
							<FiPhone />
						</div>
						<input
							type='tel'
							name='phone'
							value={form.phone}
							onChange={handleChange}
							required
							placeholder='9876543210'
							className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200'
						/>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1.5'>
						City
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400'>
							<FiMapPin />
						</div>
						<input
							type='text'
							name='city'
							value={form.city}
							onChange={handleChange}
							placeholder='Kanpur'
							className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200'
						/>
					</div>
				</div>

				<div>
					<label className='block text-sm font-medium text-gray-700 mb-1.5'>
						Occupation
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400'>
							<FiBriefcase />
						</div>
						<input
							type='text'
							name='occupation'
							value={form.occupation}
							onChange={handleChange}
							placeholder='Student / Professional'
							className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200'
						/>
					</div>
				</div>
			</div>

			<div>
				<label className='block text-sm font-medium text-gray-700 mb-1.5'>
					Why do you want to volunteer? *
				</label>
				<div className='relative'>
					<div className='absolute top-3.5 left-3.5 pointer-events-none text-gray-400'>
						<FiHeart />
					</div>
					<textarea
						name='motivation'
						value={form.motivation}
						onChange={handleChange}
						required
						rows='4'
						placeholder='Tell us briefly what drives you to join NayePankh...'
						className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200 resize-none'
					/>
				</div>
			</div>

			<button
				type='submit'
				disabled={status.loading}
				className='w-full py-3.5 bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
			>
				{status.loading ? 'Submitting...' : 'Submit Application'}
			</button>
		</form>
	);
}

export default VolunteerForm;
