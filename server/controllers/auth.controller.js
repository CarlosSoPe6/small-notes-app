import { JWT_EXPIRES_IN, JWT_TOKEN_TYPE } from '../config/auth';
import { singToken } from '../services/jwt.service';

/**
 * Login action
 * @param {Express.Request} req Request Object
 * @param {Express.Response} res Response Object
 */
export function login(req, res) {
    const { username, password } = req.body;
    // Do auth
    const accessToken = singToken({username});
    res.status(201).json({
      access_token: accessToken,
      token_type: JWT_TOKEN_TYPE,
      expires_in: JWT_EXPIRES_IN,
    });
}

/**
 * Singin action
 * @param {Express.Request} req Request Object
 * @param {Express.Response} res Response Object
 */
export function singin(req, res) {
  res.sendStatus(418);
}
