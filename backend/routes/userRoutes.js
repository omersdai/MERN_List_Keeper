import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import {
  getUsers,
  getUserProfile,
  registerUser,
  authUser,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, isAdmin, getUsers);
router.route('/profile').get(protect, getUserProfile);
router.route('/login').post(authUser);

export default router;
