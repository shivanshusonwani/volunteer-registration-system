import { Link, useLocation, useNavigate } from 'react-router';
import logo from '../assets/logo.avif';
import { useAuth } from '../context/AuthContext';
import { logoutAdmin } from '../api/authApi';
import { FiArrowLeft, FiLogOut, FiUser } from 'react-icons/fi';

function Header() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const isHomePage = location.pathname === '/';
	const isDashboardPage = location.pathname === '/admin/dashboard';

	const handleLogout = async () => {
		try {
			await logoutAdmin();
		} catch (err) {
			console.error('Logout failed:', err);
		} finally {
			logout();
			navigate('/');
		}
	};

	return (
		<header className='sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md'>
			<div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
				<Link
					to='/'
					className='flex items-center gap-3 transition-opacity hover:opacity-90'
				>
					<div className='flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200'>
						<img
							src={logo}
							alt='NayePankh Foundation'
							className='h-full w-full object-contain'
						/>
					</div>

					<h1 className='text-xl font-bold tracking-tight text-slate-900'>
						Naye<span className='text-amber-500'>Pankh</span>
					</h1>
				</Link>

				<nav className='flex items-center gap-4'>
					{/* Back to Home */}
					{!isHomePage && !isDashboardPage && (
						<Link
							to='/'
							className='inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-amber-600'
						>
							<FiArrowLeft className='h-4 w-4' />
							Back to Home
						</Link>
					)}

					{/* Logged In */}
					{user ? (
						<>
							{!isDashboardPage && (
								<Link
									to='/admin/dashboard'
									className='inline-flex items-center gap-2 rounded-xl border border-slate-400 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-700 active:scale-95'
								>
									<FiUser className='h-4 w-4' />
									Dashboard
								</Link>
							)}

							<div className='hidden sm:flex flex-col text-right'>
								<span className='text-sm font-bold text-slate-900'>
									{user?.name || 'Admin'}
								</span>
								<span className='text-xs text-slate-500 font-medium'>
									{user?.email || 'admin@nayepankh.org'}
								</span>
							</div>

							<button
								onClick={handleLogout}
								className='inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-all duration-200 hover:border-red-500 hover:bg-red-500 hover:text-white active:scale-95 cursor-pointer'
							>
								<FiLogOut className='h-4 w-4' />
								Logout
							</button>
						</>
					) : (
						isHomePage && (
							<Link
								to='/admin/login'
								className='inline-flex items-center rounded-xl border border-slate-400 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600 active:scale-95'
							>
								Admin Login
							</Link>
						)
					)}
				</nav>
			</div>
		</header>
	);
}

export default Header;
