import express from 'express';
import { body } from 'express-validator';
import validate from '../middleware/validate.js';
import appointmentController from '../controllers/appointment.controller.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post(
  '/book',
  auth('PATIENT'),
  validate([
    body('clinic').isMongoId().withMessage('Invalid clinic ID'),
    body('appointmentDate').isISO8601().withMessage('Invalid date'),
    body('appointmentTime').matches(/^([01]\d|2[0-3]):?([0-5]\d)$/).withMessage('Invalid time format (HH:MM)'),
  ]),
  appointmentController.book
);

router.get('/my', auth('PATIENT', 'DOCTOR'), appointmentController.getMyAppointments);

export default router;
