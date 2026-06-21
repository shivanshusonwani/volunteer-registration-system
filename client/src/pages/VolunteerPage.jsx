import Header from '../components/Header';
import Footer from '../components/Footer';
import VolunteerForm from '../components/VolunteerForm';
import { Link } from 'react-router';
import { FiArrowLeft } from 'react-icons/fi';

function VolunteerPage() {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />

			<main className='relative flex-1 overflow-hidden'>
				{/* Decorative Background */}
				<div className='absolute top-1/4 -left-32 h-96 w-96 rounded-full blur-3xl pointer-events-none' />
				<div className='absolute bottom-1/4 -right-32 h-96 w-96 rounded-full blur-3xl pointer-events-none' />

				<div className='relative z-10 mx-auto flex max-w-7xl flex-col px-4 py-12 sm:px-6 lg:px-8'>
					<div className='mx-auto w-full max-w-xl space-y-6'>
						<div className='space-y-2 text-center'>
							<h1 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
								Join NayePankh
							</h1>

							<p>
								Fill out the form below to apply as a volunteer.
								Together, we can make education accessible to
								every child.
							</p>
						</div>

						<VolunteerForm />
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default VolunteerPage;
