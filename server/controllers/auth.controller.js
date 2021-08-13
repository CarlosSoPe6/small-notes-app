const { JWT_EXPIRES_IN, JWT_TOKEN_TYPE } = require('../config/auth');
const { singToken }  = require('../services/jwt.service');
const { hashPassword } = require('../services/passwordHash.service');
const UserModel = require('../models/User.model');
const { HTTTP_STATUS_CODES, ERROR_MESSAGES } = require('../config/constants');

/**
 * Login action
 * @param {Express.Request} req Request Object
 * @param {Express.Response} res Response Object
 */
async function login(req, res) {
    const { username, password } = req.body;
    if (username === undefined || password === undefined) {
      return res.sendStatus(HTTTP_STATUS_CODES.BAD_REQUEST).send(ERROR_MESSAGES.badRequest());
    }
    try {
      const user = await UserModel.getByUsername(username);
      console.log(user);
      if (user === null) {
        return res.sendStatus(HTTTP_STATUS_CODES.BAD_REQUEST).send(ERROR_MESSAGES.userNotFound());
      }
      const accessToken = singToken({username});
      res.status(HTTTP_STATUS_CODES.CREATED).json({
        access_token: accessToken,
        token_type: JWT_TOKEN_TYPE,
        expires_in: JWT_EXPIRES_IN,
      });
    } catch (e) {
      console.error(e);
      res.sendStatus(HTTTP_STATUS_CODES.INTERNAL_ERROR).send(ERROR_MESSAGES.error());
    }
}

/**
 * Singup action
 * @param {Express.Request} req Request Object
 * @param {Express.Response} res Response Object
 */
async function singup(req, res) {
  const { body: { username, password } } = req;
  if (username === undefined || password === undefined) {
    return res.sendStatus(HTTTP_STATUS_CODES.BAD_REQUEST).send(ERROR_MESSAGES.badRequest());
  }
  try {
    const hash = await hashPassword(password);
    await UserModel.createUser(username, hash); 
    const accessToken = singToken({username});
    res.status(HTTTP_STATUS_CODES.CREATED).json({
      access_token: accessToken,
      token_type: JWT_TOKEN_TYPE,
      expires_in: JWT_EXPIRES_IN,
    });
  } catch (e) {
    console.error(e);
    res.sendStatus(HTTTP_STATUS_CODES.INTERNAL_ERROR).send(ERROR_MESSAGES.error());
  }
}

module.exports = {
  login,
  singup,
};
