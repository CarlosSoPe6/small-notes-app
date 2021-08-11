const { verifyToken }  = require( '../services/jwt.service');
const UserModel = require( '../models/User.model');

/**
 * Authentication middleware
 * @param {express.Request} req Request parameter.
 * @param {express.Response} res Response parameter.
 * @param {express.NextFunction} next Next function parameter.
 */
function authenticate(req, res, next) {
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
      req.sessionUser = { username };
      next();
    }).catch((e) => {
      res.sendStatus(500);
    });
  });
}

module.exports = authenticate;
