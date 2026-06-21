import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export const createVolunteer = (data) =>
	axios.post(`${API}/api/volunteers`, data);

export const getVolunteers = () =>
	axios.get(`${API}/api/volunteers`, {
		withCredentials: true,
	});

export const updateVolunteerStatus = (id, status) =>
	axios.patch(
		`${API}/api/volunteers/${id}/status`,
		{ status },
		{
			withCredentials: true,
		},
	);

export const deleteVolunteer = (id) =>
	axios.delete(`${API}/api/volunteers/${id}`, {
		withCredentials: true,
	});
