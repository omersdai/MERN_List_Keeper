import express from 'express';
import { getListInventory, createList } from '../controllers/listController.js';

const router = express.Router();

router.route('/').get(getListInventory).post(createList);

export default router;
