import express from 'express';
import {
  getListInventory,
  createList,
  getList,
} from '../controllers/listController.js';

const router = express.Router();

router.route('/:user').get(getListInventory).post(createList);

router.route('/:user/:list').get(getList);

export default router;
