import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ theAnswer: 'API is running...' });
});

export default router;
