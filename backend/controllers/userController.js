import asynchHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc Fetch all users
// @route GET /api/users
// @access Private
export const getUsers = asynchHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc Create new user
// @route POST /api/users
// @access Public
export const getUserById = asynchHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// @desc Create new user
// @route POST /api/users
// @access Public
export const createUser = asynchHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.json(user);
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
