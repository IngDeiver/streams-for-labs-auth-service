import {
  NextFunction, Request, Response, Router,
} from 'express';
import { IRoute } from '../interfaces';
import { UserControler } from '../controller';
import { isDefinedParamMiddleware, validationMiddleware } from '../middlewares';
import { UserDTO } from '../dtos';
import passport from 'passport'


/**
 *
 * Managament the routes of user
 * @category Routes
 * @class UserRouter
 * @implements {IRoute}
 */
class UserRouter implements IRoute {
  public router = Router();

  public pathIdParam = '/:id';

  constructor() {
    this.createRoutes();
  }

  createRoutes(): void {

    // get user by Id
    this.router.get(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      (req: Request, res: Response, next: NextFunction) => UserControler
        .getById(req, res, next),
    );

    // list users
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => UserControler
      .list(req, res, next));

    // Authenticate user
    this.router.post(
      '/auth',
      passport.authenticate('oauth-bearer', { session: false }), (req: Request, res: Response) => {
        res.json(req.user)
      }
    );

    // Update user
    this.router.put(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      validationMiddleware(UserDTO, true),
      (req: Request, res: Response, next: NextFunction) => UserControler
        .updateById(req, res, next),
    );

    // Remove user
    this.router.delete(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      (req: Request, res: Response, next: NextFunction) => UserControler
        .removeById(req, res, next),
    );
  }
}
export default new UserRouter().router;
