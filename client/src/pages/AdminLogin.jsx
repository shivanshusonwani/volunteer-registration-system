import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { loginAdmin } from '../api/authApi';
import { FiMail, FiLock, FiAlertCircle } from 'react-icons/fi';

function AdminLogin() {
	const navigate = useNavigate();
	const { login } = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [status, setStatus] = useState({
		loading: false,
		error: null,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus({ loading: true, error: null });

		if (!email || !password) {
			setStatus({
				loading: false,
				error: 'Email and password are required',
			});
			return;
		}

		try {
			const res = await loginAdmin({ email, password });
			if (res.data.success) {
				// Store actual user info returned by API
				login(res.data.user);
				navigate('/admin/dashboard');
			} else {
				setStatus({
					loading: false,
					error: res.data.message || 'Login failed',
				});
			}
		} catch (err) {
			console.error(err);
			const message =
				err.response?.data?.message ||
				'Invalid credentials or server error';
			setStatus({ loading: false, error: message });
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-slate-50 px-4 relative overflow-hidden'>
			{/* Background decorative elements */}
			<div className='absolute top-1/3 -left-32 w-80 h-80 bg-amber-250/20 rounded-full blur-3xl' />
			<div className='absolute bottom-1/3 -right-32 w-80 h-80 bg-orange-250/20 rounded-full blur-3xl' />

			<form
				onSubmit={handleSubmit}
				className='w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-gray-100 shadow-xl z-10 space-y-6'
			>
				<div className='text-center space-y-2'>
					<h2 className='text-3xl font-extrabold text-gray-900 tracking-tight'>
						Admin Login
					</h2>
					<p className='text-sm text-gray-500'>
						Access the NayePankh Volunteer Management Dashboard
					</p>
				</div>

				{status.error && (
					<div className='flex items-center gap-3 p-4 rounded-xl bg-rose-50 text-rose-700 text-sm border border-rose-100 animate-shake'>
						<FiAlertCircle className='w-5 h-5 shrink-0' />
						<span>{status.error}</span>
					</div>
				)}

				<div className='space-y-4'>
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-1.5'>
							Email Address
						</label>
						<div className='relative'>
							<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400'>
								<FiMail />
							</div>
							<input
								type='email'
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='admin@nayepankh.org'
								className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200'
							/>
						</div>
					</div>

					<div>
						<label className='block text-sm font-medium text-gray-700 mb-1.5'>
							Password
						</label>
						<div className='relative'>
							<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400'>
								<FiLock />
							</div>
							<input
								type='password'
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder='••••••••'
								className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-200'
							/>
						</div>
					</div>
				</div>

				<button
					type='submit'
					disabled={status.loading}
					className='w-full py-3.5 bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
				>
					{status.loading ? 'Logging in...' : 'Login'}
				</button>

				<div className='text-center'>
					<Link
						to='/'
						className='text-xs text-slate-400 transition-colors duration-150 hover:text-amber-500'
					>
						Return to Home
					</Link>
				</div>
			</form>
		</div>
	);
}

export default AdminLogin;
