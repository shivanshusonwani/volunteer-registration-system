import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export const getStats = () =>
	axios.get(`${API}/api/dashboard/stats`, {
		withCredentials: true,
	});
