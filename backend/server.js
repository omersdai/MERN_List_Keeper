import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import addAdmin from './config/addAdmin.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();
// addAdmin();

const app = express();

// app.get('/api', (req, res) => {
//   res.json({ theAnswer: 'API is running...' });
// });

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
