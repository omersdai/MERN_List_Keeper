import asynchHandler from 'express-async-handler';
import User from '../models/userModel.js';
import List from '../models/listModel.js';

// @desc Get all lists which belongs to user
// @route GET /api/lists/
// @access Protected
export const getListInventory = asynchHandler(async (req, res) => {
  const listInventory = await List.find({ user: req.user });

  if (listInventory) {
    res.json(listInventory);
  } else {
    res.status(404).json({ message: 'List not found' });
  }
});

// @desc Create a new list for a user
// @route POST /api/lists/
// @access Protected
export const createList = asynchHandler(async (req, res) => {
  const { name } = req.body;

  const list = await List.create({
    user: req.user,
    name,
  });

  if (!list) {
    res.status(400);
    throw new Error('Invalid list data');
  }

  res.json(list);
});

// @desc Get a single list which belongs to user
// @route GET /api/lists/:list
// @access Protected
export const getList = asynchHandler(async (req, res) => {
  const listID = req.params.list;

  const list = await List.findById(listID);

  if (!list || !list.user._id.equals(req.user._id)) {
    res.status(404);
    throw new Error("List doesn't exist");
  }

  res.json(list);
});

// @desc Edit list which belongs to a user
// @route PUT /api/lists/
// @access Protected
export const editList = asynchHandler(async (req, res) => {
  const list = req.body;

  if (!list || req.user._id.toString() !== list.user) {
    res.status(404);
    throw new Error("List doesn't exist");
  }

  await List.findByIdAndUpdate(list._id, list); // returns old list

  if (!list) {
    res.status(400);
    throw new Error("User doesn't have that data");
  }

  res.json(list);
});

// @desc Delete a single list which belongs to user
// @route DELETE /api/lists/:list
// @access Protected
export const deleteList = asynchHandler(async (req, res) => {
  const listID = req.params.list;

  let list = await List.findById(listID);

  if (!list || !list.user._id.equals(req.user._id)) {
    res.status(404);
    throw new Error("List doesn't exist");
  }

  list = await List.findByIdAndDelete(listID);
  res.json(list);
});
