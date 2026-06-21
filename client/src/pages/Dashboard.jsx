import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import {
	getVolunteers,
	updateVolunteerStatus,
	deleteVolunteer,
} from '../api/volunteerApi';
import { getStats } from '../api/dashboardApi';
import { logoutAdmin } from '../api/authApi';
import VolunteerCard from '../components/VolunteerCard';
import {
	FiUsers,
	FiClock,
	FiCheckCircle,
	FiXCircle,
	FiLogOut,
	FiSearch,
	FiRefreshCw,
	FiAlertCircle,
	FiInbox,
} from 'react-icons/fi';
import { BiLoaderAlt } from 'react-icons/bi';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Dashboard() {
	const navigate = useNavigate();
	const { user, logout } = useAuth();

	const [volunteers, setVolunteers] = useState([]);
	const [stats, setStats] = useState({
		total: 0,
		pending: 0,
		approved: 0,
		rejected: 0,
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [searchQuery, setSearchQuery] = useState('');
	const [filterStatus, setFilterStatus] = useState('ALL');

	// Modal target state
	const [deleteTargetId, setDeleteTargetId] = useState(null);

	const fetchData = async () => {
		setLoading(true);
		setError(null);
		try {
			const [volRes, statsRes] = await Promise.all([
				getVolunteers(),
				getStats(),
			]);
			if (volRes.data.success) {
				setVolunteers(volRes.data.volunteers);
			}
			if (statsRes.data.success) {
				setStats(statsRes.data.stats);
			}
		} catch (err) {
			console.error(err);
			setError(
				'Failed to fetch dashboard data. Please try logging in again.',
			);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleStatusChange = async (id, newStatus) => {
		try {
			const res = await updateVolunteerStatus(id, newStatus);
			if (res.data.success) {
				// Refresh local state
				setVolunteers((prev) =>
					prev.map((v) =>
						v._id === id ? { ...v, status: newStatus } : v,
					),
				);
				// Refresh stats
				const statsRes = await getStats();
				if (statsRes.data.success) {
					setStats(statsRes.data.stats);
				}
			}
		} catch (err) {
			console.error(err);
			alert('Failed to update volunteer status');
		}
	};

	const handleDeleteTrigger = (id) => {
		setDeleteTargetId(id);
	};

	const confirmDelete = async () => {
		if (!deleteTargetId) return;

		try {
			const res = await deleteVolunteer(deleteTargetId);
			if (res.data.success) {
				setVolunteers((prev) =>
					prev.filter((v) => v._id !== deleteTargetId),
				);
				// Refresh stats
				const statsRes = await getStats();
				if (statsRes.data.success) {
					setStats(statsRes.data.stats);
				}
			}
		} catch (err) {
			console.error(err);
			alert('Failed to delete volunteer record');
		} finally {
			setDeleteTargetId(null);
		}
	};

	const handleLogout = async () => {
		try {
			await logoutAdmin();
		} catch (err) {
			console.error('Logout API failed:', err);
		} finally {
			logout();
			navigate('/admin/login');
		}
	};

	// Filter and Search Logic
	const filteredVolunteers = volunteers.filter((v) => {
		const matchesStatus =
			filterStatus === 'ALL' || v.status === filterStatus;
		const query = searchQuery.toLowerCase();
		const matchesSearch =
			v.fullName?.toLowerCase().includes(query) ||
			v.email?.toLowerCase().includes(query) ||
			v.phone?.includes(query) ||
			v.city?.toLowerCase().includes(query) ||
			v.occupation?.toLowerCase().includes(query);

		return matchesStatus && matchesSearch;
	});

	return (
		<div className='min-h-screen bg-slate-50 text-slate-800 flex flex-col'>
			<Header />

			{/* Main Content Area */}
			<main className='grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 space-y-8'>
				{/* Welcome banner / title row */}
				<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
					<div>
						<h2 className='text-2xl font-black text-slate-900'>
							Admin Dashboard
						</h2>
						<p className='text-sm text-slate-500 mt-1'>
							Manage volunteer submissions and approve memberships
						</p>
					</div>
					<button
						onClick={fetchData}
						className='inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition font-semibold text-sm shadow-sm cursor-pointer'
					>
						<FiRefreshCw
							className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`}
						/>
						Refresh
					</button>
				</div>

				{/* Error Alert */}
				{error && (
					<div className='flex items-center gap-3 p-4 rounded-2xl bg-rose-50 border border-rose-100 text-rose-700 shadow-sm'>
						<FiAlertCircle className='w-5 h-5 shrink-0' />
						<div className='grow text-sm font-medium'>{error}</div>
						<button
							onClick={() => navigate('/admin/login')}
							className='text-xs font-bold underline hover:no-underline cursor-pointer'
						>
							Login Again
						</button>
					</div>
				)}

				{/* Stats Cards */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
					{/* Total */}
					<div className='bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/50 shadow-sm flex items-center gap-4 hover:shadow-md transition'>
						<div className='w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0'>
							<FiUsers className='w-6 h-6' />
						</div>
						<div>
							<h4 className='text-xs font-semibold text-slate-400 uppercase tracking-wider'>
								Total Applications
							</h4>
							<p className='text-2xl sm:text-3xl font-black text-slate-800 mt-1'>
								{stats.total}
							</p>
						</div>
					</div>

					{/* Pending */}
					<div className='bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/50 shadow-sm flex items-center gap-4 hover:shadow-md transition'>
						<div className='w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0'>
							<FiClock className='w-6 h-6' />
						</div>
						<div>
							<h4 className='text-xs font-semibold text-slate-400 uppercase tracking-wider'>
								Pending
							</h4>
							<p className='text-2xl sm:text-3xl font-black text-slate-800 mt-1'>
								{stats.pending}
							</p>
						</div>
					</div>

					{/* Approved */}
					<div className='bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/50 shadow-sm flex items-center gap-4 hover:shadow-md transition'>
						<div className='w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0'>
							<FiCheckCircle className='w-6 h-6' />
						</div>
						<div>
							<h4 className='text-xs font-semibold text-slate-400 uppercase tracking-wider'>
								Approved
							</h4>
							<p className='text-2xl sm:text-3xl font-black text-slate-800 mt-1'>
								{stats.approved}
							</p>
						</div>
					</div>

					{/* Rejected */}
					<div className='bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/50 shadow-sm flex items-center gap-4 hover:shadow-md transition'>
						<div className='w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0'>
							<FiXCircle className='w-6 h-6' />
						</div>
						<div>
							<h4 className='text-xs font-semibold text-slate-400 uppercase tracking-wider'>
								Rejected
							</h4>
							<p className='text-2xl sm:text-3xl font-black text-slate-800 mt-1'>
								{stats.rejected}
							</p>
						</div>
					</div>
				</div>

				{/* Search & Filter Bar */}
				<div className='bg-white rounded-2xl border border-slate-200/50 shadow-sm p-4 flex flex-col md:flex-row gap-4 items-center justify-between'>
					{/* Filters */}
					<div className='flex flex-wrap gap-2 w-full md:w-auto'>
						{['ALL', 'PENDING', 'APPROVED', 'REJECTED'].map(
							(status) => (
								<button
									key={status}
									onClick={() => setFilterStatus(status)}
									className={`px-4 py-2 text-xs font-bold rounded-xl transition duration-150 cursor-pointer border ${
										filterStatus === status
											? 'bg-slate-900 border-slate-900 text-white shadow-sm'
											: 'bg-slate-50 border-slate-200 text-slate-655 hover:bg-slate-100/55'
									}`}
								>
									{status}
								</button>
							),
						)}
					</div>

					{/* Search */}
					<div className='relative w-full md:max-w-md'>
						<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400'>
							<FiSearch className='w-4 h-4' />
						</div>
						<input
							type='text'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder='Search by name, email, phone, or city...'
							className='w-full pl-10 pr-4 py-2.5 bg-slate-50 hover:bg-slate-100/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200 text-sm'
						/>
					</div>
				</div>

				{/* Volunteers Grid List */}
				{loading ? (
					// Load state

					<div className='flex flex-col min-h-75 items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-sm'>
						<BiLoaderAlt className='h-10 w-10 animate-spin text-amber-500' />
						<span className='text-lg font-medium text-slate-700'>
							Loading...
						</span>
					</div>
				) : filteredVolunteers.length > 0 ? (
					<div className='grid md:grid-cols-2 gap-6'>
						{filteredVolunteers.map((volunteer) => (
							<VolunteerCard
								key={volunteer._id}
								volunteer={volunteer}
								onApprove={(id) =>
									handleStatusChange(id, 'APPROVED')
								}
								onReject={(id) =>
									handleStatusChange(id, 'REJECTED')
								}
								onDelete={handleDeleteTrigger}
							/>
						))}
					</div>
				) : (
					// Empty state
					<div className='bg-white rounded-3xl border border-slate-200/50 shadow-inner py-16 text-center max-w-xl mx-auto'>
						<div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 text-slate-400 mb-4'>
							<FiInbox className='w-8 h-8' />
						</div>
						<h3 className='text-xl font-bold text-slate-700'>
							No applications found
						</h3>
						<p className='text-sm text-slate-500 mt-1 max-w-xs mx-auto'>
							{searchQuery
								? 'Try adjusting your search terms or filters to find what you are looking for.'
								: 'No volunteer submissions of this status category are currently available.'}
						</p>
					</div>
				)}
			</main>

			{/* Custom Deletion Confirmation Modal */}
			{deleteTargetId && (
				<div className='fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-opacity'>
					<div className='bg-white rounded-2xl border border-slate-100 shadow-xl max-w-sm w-full p-6 space-y-4 animate-scale-up'>
						<div className='text-center space-y-2'>
							<div className='w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-2'>
								<FiAlertCircle className='w-6 h-6' />
							</div>
							<h3 className='text-lg font-bold text-slate-900'>
								Confirm Deletion
							</h3>
							<p className='text-sm text-slate-500 leading-relaxed'>
								Are you sure you want to delete this volunteer
								application? This action is permanent and cannot
								be undone.
							</p>
						</div>
						<div className='flex gap-3 justify-center'>
							<button
								onClick={() => setDeleteTargetId(null)}
								className='flex-1 py-2 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 font-semibold text-sm transition duration-150 cursor-pointer'
							>
								Cancel
							</button>
							<button
								onClick={confirmDelete}
								className='flex-1 py-2 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition duration-150 cursor-pointer'
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			)}

			<Footer />
		</div>
	);
}

export default Dashboard;
