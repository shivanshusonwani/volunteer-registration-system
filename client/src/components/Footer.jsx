import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaYoutube,
} from 'react-icons/fa';

function Footer() {
	return (
		<footer className='border-t border-slate-300 bg-slate-200/60'>
			<div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
				<div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
					<div className='text-center md:text-left'>
						<h3 className='text-lg font-bold text-slate-900'>
							Naye<span className='text-amber-500'>Pankh</span>
						</h3>

						<p className='mt-1 text-sm text-slate-600'>
							Empowering communities through volunteering and
							social impact.
						</p>
					</div>

					<div className='flex items-center gap-4'>
						<a
							href='https://www.facebook.com/nayepankhfoundation'
							target='_blank'
							rel='noopener noreferrer'
							className='rounded-lg border border-slate-300 bg-white p-3 text-slate-600 transition-all hover:border-amber-500 hover:text-amber-500 hover:shadow-sm'
						>
							<FaFacebookF size={18} />
						</a>

						<a
							href='https://www.instagram.com/nayepankhfoundation'
							target='_blank'
							rel='noopener noreferrer'
							className='rounded-lg border border-slate-300 bg-white p-3 text-slate-600 transition-all hover:border-amber-500 hover:text-amber-500 hover:shadow-sm'
						>
							<FaInstagram size={18} />
						</a>

						<a
							href='https://www.linkedin.com/company/nayepankh'
							target='_blank'
							rel='noopener noreferrer'
							className='rounded-lg border border-slate-300 bg-white p-3 text-slate-600 transition-all hover:border-amber-500 hover:text-amber-500 hover:shadow-sm'
						>
							<FaLinkedinIn size={18} />
						</a>

						<a
							href='https://www.youtube.com/@nayepankhfoundation'
							target='_blank'
							rel='noopener noreferrer'
							className='rounded-lg border border-slate-300 bg-white p-3 text-slate-600 transition-all hover:border-amber-500 hover:text-amber-500 hover:shadow-sm'
						>
							<FaYoutube size={18} />
						</a>
					</div>
				</div>

				<div className='mt-8 border-t border-slate-300 pt-6'>
					<p className='text-center text-sm text-slate-500'>
						© {new Date().getFullYear()} NayePankh Foundation. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
