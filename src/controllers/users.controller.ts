import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import UserModel from '../models/users.model';

class UsersController {
  // This function creates a new user.
  async createUser(req: Request, res: Response) {
    const id = uuidv4().split('-').slice(-2).join('-');
    // Hash the password.
    const hash = await bcrypt.hash(req.body.password, 10);
    // Create new user
    const newUser = await UserModel.create({
      full_name: req.body.full_name,
      email: req.body.email,
      password: hash,
      user_id: id,
    });
    res.json({ message: `User ${id} successfully created.` });
  }
}

export default new UsersController();
