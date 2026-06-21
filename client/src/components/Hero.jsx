import { Link } from 'react-router';
import {
	FiArrowRight,
	FiBookOpen,
	FiAward,
	FiUsers,
	FiHeart,
} from 'react-icons/fi';

function Hero() {
	return (
		<section className='relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white py-20 px-4'>
			{/* Background decorative elements */}
			<div className='absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none' />
			<div className='absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none' />

			<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10'>
				<div className='space-y-6 text-center md:text-left'>
					<div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-sm font-medium'>
						<span className='w-2 h-2 rounded-full bg-amber-400 animate-ping' />
						Join the Movement for Change
					</div>

					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight my-0!'>
						Giving Wings to <br />
						<span className='bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>
							Underprivileged Dreams
						</span>
					</h1>

					<p className='text-lg text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed'>
						NayePankh Foundation is dedicated to driving grassroot
						changes through quality education, health initiatives,
						and community support in India.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2'>
						<Link
							to='/volunteer'
							className='inline-flex items-center justify-center gap-2 px-5 py-3 bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transform hover:-translate-y-0.5 transition duration-200 cursor-pointer'
						>
							Become Volunteer
							<FiArrowRight className='w-5 h-5' />
						</Link>
						<a
							href='#about'
							className='inline-flex items-center justify-center px-5 py-3 bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 font-semibold rounded-xl hover:bg-slate-800 transition duration-200 cursor-pointer'
						>
							Learn More
						</a>
					</div>
				</div>

				{/* Interactive/Visual card grid */}
				<div className='relative grid grid-cols-2 gap-4 max-w-md mx-auto md:max-w-none w-full'>
					<div className='space-y-4'>
						<div className='bg-slate-800/80 backdrop-blur border border-slate-700 p-6 rounded-2xl shadow-xl transform hover:scale-[1.02] transition duration-250'>
							<div className='w-10 h-10 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center mb-4'>
								<FiBookOpen className='w-6 h-6' />
							</div>
							<h3 className='font-bold text-lg mb-1'>
								Education
							</h3>
							<p className='text-sm text-slate-400'>
								Providing books, tutorials, and tutoring support
								to children.
							</p>
						</div>
						<div className='bg-slate-800/80 backdrop-blur border border-slate-700 p-6 rounded-2xl shadow-xl transform hover:scale-[1.02] transition duration-250'>
							<div className='w-10 h-10 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center mb-4'>
								<FiUsers className='w-6 h-6' />
							</div>
							<h3 className='font-bold text-lg mb-1'>
								Community
							</h3>
							<p className='text-sm text-slate-400'>
								Spreading hope and unity through collective
								action.
							</p>
						</div>
					</div>
					<div className='space-y-4 pt-8'>
						<div className='bg-slate-800/80 backdrop-blur border border-slate-700 p-6 rounded-2xl shadow-xl transform hover:scale-[1.02] transition duration-250'>
							<div className='w-10 h-10 bg-rose-500/10 text-rose-400 rounded-lg flex items-center justify-center mb-4'>
								<FiHeart className='w-6 h-6' />
							</div>
							<h3 className='font-bold text-lg mb-1'>
								Compassion
							</h3>
							<p className='text-sm text-slate-400'>
								Helping families with warm meals, dry rations,
								and healthcare.
							</p>
						</div>
						<div className='bg-slate-800/80 backdrop-blur border border-slate-700 p-6 rounded-2xl shadow-xl transform hover:scale-[1.02] transition duration-250'>
							<div className='w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mb-4'>
								<FiAward className='w-6 h-6' />
							</div>
							<h3 className='font-bold text-lg mb-1'>
								Empowerment
							</h3>
							<p className='text-sm text-slate-400'>
								Enabling underrepresented communities with
								skills.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
