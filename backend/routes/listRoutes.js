import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import List from '../models/listModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ theAnswer: 'List API is running...' });
});

export default router;
