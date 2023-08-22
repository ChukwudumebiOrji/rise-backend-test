import express from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/users.model';

class UsersController {
  async createUser(req: express.Request, res: express.Response) {
    bcrypt.hash(req.body.password, 10, async function (err: any, hash: any) {
      if (err) console.log(err);
      else
        await UserModel.create({
          full_name: req.body.full_name,
          email: req.body.email,
          password: hash,
        });

      res.send(`User ${req.body.email} created`);
    });
  }
}

export default new UsersController();
