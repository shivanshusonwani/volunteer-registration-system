import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export const loginAdmin = (data) =>
	axios.post(`${API}/api/auth/login`, data, {
		withCredentials: true,
	});

export const logoutAdmin = () =>
	axios.post(
		`${API}/api/auth/logout`,
		{},
		{
			withCredentials: true,
		},
	);

export const getCurrentAdmin = () =>
	axios.get(`${API}/api/auth/me`, {
		withCredentials: true,
	});
