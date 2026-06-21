import { Router } from 'express';

import {
	applyVolunteer,
	getVolunteers,
	getVolunteerById,
	updateVolunteerStatus,
	deleteVolunteer,
} from '../controllers/volunteer.controller.js';

import protect from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', applyVolunteer);

router.get('/', protect, getVolunteers);

router.get('/:id', protect, getVolunteerById);

router.patch('/:id/status', protect, updateVolunteerStatus);

router.delete('/:id', protect, deleteVolunteer);

export default router;
