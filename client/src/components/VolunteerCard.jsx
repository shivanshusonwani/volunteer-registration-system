import {
	FiCheck,
	FiX,
	FiTrash2,
	FiMapPin,
	FiBriefcase,
	FiCalendar,
	FiMail,
	FiPhone,
} from 'react-icons/fi';

function VolunteerCard({ volunteer, onApprove, onReject, onDelete }) {
	const getStatusStyles = (status) => {
		switch (status) {
			case 'APPROVED':
				return 'bg-emerald-50 text-emerald-700 border-emerald-100';
			case 'REJECTED':
				return 'bg-rose-50 text-rose-700 border-rose-100';
			case 'PENDING':
			default:
				return 'bg-amber-50 text-amber-700 border-amber-100';
		}
	};

	const formatDate = (dateStr) => {
		if (!dateStr) return '';
		const d = new Date(dateStr);
		return d.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		});
	};

	return (
		<div className='bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col justify-between space-y-4'>
			{/* Header info: Name & Status */}
			<div className='flex justify-between items-start gap-4'>
				<div>
					<h3 className='font-bold text-lg text-gray-800 tracking-tight leading-snug'>
						{volunteer.fullName}
					</h3>
					<div className='flex items-center gap-1.5 text-xs text-gray-400 mt-1'>
						<FiCalendar />
						<span>Applied {formatDate(volunteer.createdAt)}</span>
					</div>
				</div>
				<span
					className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getStatusStyles(volunteer.status)}`}
				>
					{volunteer.status}
				</span>
			</div>

			{/* Contact details */}
			<div className='space-y-2 text-sm text-gray-600 border-t border-gray-50 pt-3'>
				<div className='flex items-center gap-2.5'>
					<FiMail className='text-gray-400' />
					<a
						href={`mailto:${volunteer.email}`}
						className='hover:underline hover:text-amber-600 transition-colors'
					>
						{volunteer.email}
					</a>
				</div>
				<div className='flex items-center gap-2.5'>
					<FiPhone className='text-gray-400' />
					<a
						href={`tel:${volunteer.phone}`}
						className='hover:underline hover:text-amber-600 transition-colors'
					>
						{volunteer.phone}
					</a>
				</div>
				{(volunteer.city || volunteer.occupation) && (
					<div className='flex flex-wrap gap-4 pt-1 text-xs text-gray-500'>
						{volunteer.city && (
							<div className='flex items-center gap-1'>
								<FiMapPin className='text-gray-450' />
								<span>{volunteer.city}</span>
							</div>
						)}
						{volunteer.occupation && (
							<div className='flex items-center gap-1'>
								<FiBriefcase className='text-gray-450' />
								<span>{volunteer.occupation}</span>
							</div>
						)}
					</div>
				)}
			</div>

			{/* Motivation quote */}
			{volunteer.motivation && (
				<div className='bg-slate-50 rounded-xl p-3 text-xs text-gray-600 italic border-l-2 border-amber-400/80'>
					"{volunteer.motivation}"
				</div>
			)}

			{/* Control actions */}
			<div className='flex justify-between items-center gap-2 pt-2 border-t border-gray-50'>
				<div className='flex gap-2'>
					{volunteer.status !== 'APPROVED' && (
						<button
							onClick={() => onApprove(volunteer._id)}
							className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 hover:text-emerald-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer border border-emerald-200/50'
							title='Approve Application'
						>
							<FiCheck className='w-3.5 h-3.5' />
							Approve
						</button>
					)}
					{volunteer.status !== 'REJECTED' && (
						<button
							onClick={() => onReject(volunteer._id)}
							className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer border border-rose-200/50'
							title='Reject Application'
						>
							<FiX className='w-3.5 h-3.5' />
							Reject
						</button>
					)}
				</div>

				<button
					onClick={() => onDelete(volunteer._id)}
					className='p-1.5 bg-gray-50 hover:bg-rose-50 text-gray-400 hover:text-rose-600 hover:border-rose-100 rounded-lg transition-all border border-transparent cursor-pointer'
					title='Delete Record'
				>
					<FiTrash2 className='w-4 h-4' />
				</button>
			</div>
		</div>
	);
}

export default VolunteerCard;
