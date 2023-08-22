import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import UsersController from '../controllers/users.controllers';
import { body } from 'express-validator';

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route('users')
      .post(
        body('full_name').isString(),
        body('email').isEmail(),
        body('password').isString(),
        UsersController.createUser
      );

    return this.app;
  }
}
