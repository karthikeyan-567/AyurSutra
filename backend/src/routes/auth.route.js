import express from 'express';
import { body } from 'express-validator';
import validate from '../middleware/validate.js';
import authController from '../controllers/auth.controller.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post(
  '/register',
  validate([
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    body('name').notEmpty().withMessage('Name is required'),
    body('role').optional().isIn(['PATIENT', 'DOCTOR', 'ADMIN']),
  ]),
  authController.register
);

router.post(
  '/login',
  validate([
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ]),
  authController.login
);

router.post('/logout', authController.logout);

router.get('/me', auth(), authController.login); // Re-using login logic for me or separate

export default router;
