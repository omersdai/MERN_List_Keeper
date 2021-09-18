import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/userModel.js';
import List from '../models/listModel.js';

dotenv.config();

const addAdmin = async () => {
  try {
    const adminUser = new User({
      name: 'Vengeanze',
      email: 'omer@omer.com',
      password: 'zaaxd',
      isAdmin: true,
    });

    await adminUser.save();
    console.log(adminUser);
  } catch (error) {
    console.error(error);
  }
};

export default addAdmin;
