import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import VolunteerPage from './pages/VolunteerPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />

			<Route path='/volunteer' element={<VolunteerPage />} />

			<Route path='/admin/login' element={<AdminLogin />} />

			<Route path='/admin/dashboard' element={<Dashboard />} />
		</Routes>
	);
}

export default App;
