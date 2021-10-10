import jwt from 'jsonwebtoken';
import asynchHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const protect = asynchHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET); // {id:, iat: issuedAt, exp: expiration}

      req.user = await User.findById(decoded.id).select('-password');
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token verification failed!');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }

  next();
});

export const isAdmin = asynchHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('User does not have admin priviledges');
  }
});
