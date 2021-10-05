import asynchHandler from 'express-async-handler';
import User from '../models/userModel.js';
import List from '../models/listModel.js';

// @desc Get all lists which belongs to user
// @route GET /api/lists/:user
// @access Protected
export const getListInventory = asynchHandler(async (req, res) => {
  const userID = req.params.user;
  const user = await User.findById(userID);

  const listInventory = await List.find({ user });

  if (user) {
    res.json(listInventory);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// @desc Create a new list which belongs to a user
// @route POST /api/lists/:user
// @access Protected
export const createList = asynchHandler(async (req, res) => {
  const userID = req.params.user;
  const { name } = req.body;

  console.log(name);

  const user = await User.findById(userID);

  if (!user) {
    res.status(404);
    throw new Error("User doesn't exist");
  }

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

// @desc Get a single list which belongs to user
// @route GET /api/lists/:user/:list
// @access Protected
export const getList = asynchHandler(async (req, res) => {
  const userID = req.params.user;
  const listID = req.params.list;
  const user = await User.findById(userID);

  if (!user) {
    res.status(404);
    throw new Error("User doesn't exist");
  }

  const list = await List.findById(listID);

  if (list && list.user._id.equals(user._id)) {
    res.json(list);
  } else {
    res.status(404);
    throw new Error("List doesn't exist");
  }
});
