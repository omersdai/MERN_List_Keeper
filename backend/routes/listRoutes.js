import express from 'express';
import asynchHandler from 'express-async-handler';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import List from '../models/listModel.js';
import User from '../models/userModel.js';

const router = express.Router();

// @desc Get all lists which belongs to user
// @route GET /api/lists
// @access Protected
router.get(
  '/:id',
  asynchHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    const listInventory = await List.find({ user });

    if (user) {
      res.json(listInventory);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  })
);

router.post('/', async (req, res) => {
  const name = 'My first list';

  const user = await User.findOne({});
  const list = await List.create({
    user,
    name,
  });
  console.log(list);
  res.json(list);
});

export default router;
