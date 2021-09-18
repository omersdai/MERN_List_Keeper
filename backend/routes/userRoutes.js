import express from 'express';
import asynchHandler from 'express-async-handler';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/userModel.js';

const router = express.Router();

// @desc Fetch all users
// @route GET /api/users
// @access Private
router.get(
  '/',
  asynchHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
);

router.get(
  '/:id',
  asynchHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  })
);

export default router;
