import { Link } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import {
	FiArrowRight,
	FiBookOpen,
	FiAward,
	FiUsers,
	FiHeart,
	FiSmile,
	FiShield,
} from 'react-icons/fi';

function Home() {
	return (
		<div>
			<Header />

			<Hero />

			<section
				className='py-16 bg-slate-50 border-y border-slate-100'
				id='about'
			>
				<div className='max-w-6xl mx-auto px-4'>
					<div className='text-center max-w-2xl mx-auto mb-12'>
						<h2 className='text-3xl font-extrabold text-gray-900'>
							Our Footprint of Change
						</h2>
						<p className='text-gray-500 mt-3'>
							Through persistent field operations and support from
							volunteers across India, we have created consistent
							social upliftment.
						</p>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
						<div className='p-6 bg-white rounded-2xl shadow-sm border border-slate-100'>
							<p className='text-4xl font-extrabold text-amber-500'>
								15k+
							</p>
							<h4 className='font-semibold text-gray-700 mt-2'>
								Lives Impacted
							</h4>
						</div>
						<div className='p-6 bg-white rounded-2xl shadow-sm border border-slate-100'>
							<p className='text-4xl font-extrabold text-orange-600'>
								500+
							</p>
							<h4 className='font-semibold text-gray-700 mt-2'>
								Volunteers Joined
							</h4>
						</div>
						<div className='p-6 bg-white rounded-2xl shadow-sm border border-slate-100'>
							<p className='text-4xl font-extrabold text-amber-500'>
								20+
							</p>
							<h4 className='font-semibold text-gray-700 mt-2'>
								Cities Covered
							</h4>
						</div>
						<div className='p-6 bg-white rounded-2xl shadow-sm border border-slate-100'>
							<p className='text-4xl font-extrabold text-orange-600'>
								100%
							</p>
							<h4 className='font-semibold text-gray-700 mt-2'>
								Dedicated Efforts
							</h4>
						</div>
					</div>
				</div>
			</section>

			<section className='py-20 bg-white'>
				<div className='max-w-6xl mx-auto px-4'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div className='space-y-6'>
							<h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight'>
								Why Should You Volunteer with Us?
							</h2>
							<p className='text-gray-600 leading-relaxed'>
								Volunteering with NayePankh Foundation is not
								just about donating time, it is about witnessing
								first-hand the impact of your efforts. Whether
								it's teaching basic math to a child,
								distributing warm blankets in cold winters, or
								managing our digital programs, every effort
								counts.
							</p>

							<div className='space-y-4'>
								<div className='flex gap-4 items-start'>
									<div className='shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mt-0.5'>
										<FiSmile className='w-4 h-4' />
									</div>
									<div>
										<h4 className='font-bold text-gray-800'>
											Make Genuine Connections
										</h4>
										<p className='text-sm text-gray-500'>
											Meet like-minded changemakers and
											network with passionate citizens.
										</p>
									</div>
								</div>

								<div className='flex gap-4 items-start'>
									<div className='shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mt-0.5'>
										<FiAward className='w-4 h-4' />
									</div>
									<div>
										<h4 className='font-bold text-gray-800'>
											Gain Leadership Skills
										</h4>
										<p className='text-sm text-gray-500'>
											Lead city chapters, coordinate
											campaigns, and build organizational
											skills.
										</p>
									</div>
								</div>

								<div className='flex gap-4 items-start'>
									<div className='shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mt-0.5'>
										<FiShield className='w-4 h-4' />
									</div>
									<div>
										<h4 className='font-bold text-gray-800'>
											Volunteer Certificate
										</h4>
										<p className='text-sm text-gray-500'>
											Get authorized performance review
											certificates endorsing your
											services.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='bg-linear-to-tr from-amber-150 to-orange-100/50 p-8 rounded-3xl border border-amber-100/60 shadow-inner relative flex flex-col justify-between  max-w-md mx-auto w-full overflow-hidden'>
							<div className='absolute -right-16 -top-16 w-48 h-48 bg-amber-200/50 rounded-full blur-2xl' />

							<div className='space-y-4 z-10'>
								<span className='px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-bold uppercase tracking-wider'>
									Our Mission
								</span>
								<h3 className='text-2xl font-black text-slate-800 leading-tight my-4'>
									To create a society where lack of resources
									never blocks a child's dream of education.
								</h3>
							</div>

							<div className='border-t border-amber-200/60 pt-4 z-10'>
								<p className='text-sm text-slate-700 italic font-medium'>
									"Before, children in this slum couldn't read
									numbers. Now, with NayePankh evening
									classes, they read English books with joy."
								</p>
								<span className='block text-xs font-bold text-slate-500 mt-2'>
									— Center Coordinator, Kanpur
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='relative overflow-hidden bg-white py-20 text-center'>
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.12),transparent_50%)]' />

				<div className='relative z-10 mx-auto max-w-4xl space-y-6 px-4'>
					<h2 className='text-3xl font-extrabold text-slate-900 sm:text-5xl'>
						Ready to Spread Your Wings?
					</h2>

					<p className='mx-auto max-w-xl text-lg leading-relaxed text-slate-600'>
						It only takes a few minutes to fill out the form. Join
						our digital channel, get updates, and attend the next
						orientation drive in your city.
					</p>

					<div>
						<Link
							to='/volunteer'
							className='
					inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-600 px-8 py-4 font-semibold text-white shadow-lg shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/30'
						>
							Become Volunteer Now
							<FiArrowRight className='h-5 w-5' />
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default Home;
