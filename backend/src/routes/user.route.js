import express from 'express';
import userController from '../controllers/user.controller.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/me', auth(), userController.getMe);
router.put('/profile', auth('PATIENT'), userController.updateProfile);

export default router;
