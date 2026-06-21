import { Link } from 'react-router';
import logo from '../assets/logo.avif';

function Header() {
	return (
		<header className='sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md'>
			<div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
				<Link
					to='/'
					className='flex items-center gap-3 transition-opacity hover:opacity-90'
				>
					<div className='flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-slate-900 ring-1 ring-slate-800'>
						<img
							src={logo}
							alt='NayePankh Foundation'
							className='h-full w-full object-contain'
						/>
					</div>

					<h1 className='text-lg font-bold tracking-tight text-slate-100'>
						Naye<span className='text-amber-500'>Pankh</span>
					</h1>
				</Link>

				<nav>
					<Link
						to='#'
						className='rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400 active:scale-95'
					>
						Admin Login
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
