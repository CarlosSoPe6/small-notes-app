import { verifyToken } from '../services/jwt.service';
import UserModel from '../models/User.model';

/**
 * Authentication middleware
 * @param {express.Request} req Request parameter.
 * @param {express.Response} res Response parameter.
 * @param {express.NextFunction} next Next function parameter.
 */
export function authenticate(req, res, next) {
  const bearer = req.headers.authorization;
  if (bearer === undefined) {
    return res.sendStatus(401);
  }
  const token = bearer.split(' ')[1];
  verifyToken(token, (err, decoded) => {
    if (err) {
      return res.sendStatus(400);
    }
    const { username } = decoded;
    UserModel.getByUsername(username).then((result) => {
      if (result === undefined) {
        return res.sendStatus(401);
      }
      req.username = username;
      next();
    }).catch((e) => {
      res.sendStatus(500);
    });
  });
}
