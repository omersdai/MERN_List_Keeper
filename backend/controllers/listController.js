import asynchHandler from 'express-async-handler';
import User from '../models/userModel.js';
import List from '../models/listModel.js';

// @desc Get all lists which belongs to user
// @route GET /api/lists
// @access Protected
export const getListInventory = asynchHandler(async (req, res) => {
  const { user: userID } = req.body;
  console.log(req.body);
  console.log('catch userID', userID);
  const user = await User.findById(userID);

  const listInventory = await List.find({ user });

  if (user) {
    res.json(listInventory);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// @desc Create a new list which belongs to a user
// @route POST /api/lists
// @access Protected
export const createList = asynchHandler(async (req, res) => {
  const { user, name } = req.body;

  const list = await List.create({
    user,
    name,
  });

  if (list) {
    res.json(list);
  } else {
    res.status(400);
    throw new Error('Invalid list data');
  }
});
