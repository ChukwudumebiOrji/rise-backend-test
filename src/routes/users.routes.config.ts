import { Application, Request } from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import UsersController from '../controllers/users.controller';
import { body } from 'express-validator';

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes(): Application {
    /*
    This route is used to create a user.
    */
    this.app
      .route('/users')
      .post(
        body('full_name').isString(),
        body('email').isEmail(),
        body('password').isString(),
        UsersController.createUser
      );

    return this.app;
  }
}
