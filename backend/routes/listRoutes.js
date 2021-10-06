import express from 'express';
import {
  getListInventory,
  createList,
  getList,
  editList,
} from '../controllers/listController.js';

const router = express.Router();

router.route('/:user').get(getListInventory).post(createList).put(editList);

router.route('/:user/:list').get(getList);

export default router;
