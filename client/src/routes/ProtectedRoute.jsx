import { Navigate } from 'react-router';

import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to='/admin/login' replace />;
	}

	return children;
}

export default ProtectedRoute;
