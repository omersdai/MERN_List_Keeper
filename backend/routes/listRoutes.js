import express from 'express';
import {
  getListInventory,
  createList,
  getList,
  editList,
  deleteList,
} from '../controllers/listController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(protect, getListInventory)
  .post(protect, createList)
  .put(protect, editList);

router.route('/:list').get(protect, getList).delete(protect, deleteList);

export default router;
