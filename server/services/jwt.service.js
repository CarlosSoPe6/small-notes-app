import jwt from 'jsonwebtoken';
import {
  JWT_ALGORITHM,
  JWT_AUDIENCE,
  JWT_EXPIRES_IN,
  JWT_ISSUER,
  JWT_SECRET
} from '../config/auth';

/**
 * Generates a singed token
 * @param {Object} payload Payload to insert
 */
export function singToken(payload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
    audience: JWT_AUDIENCE,
    issuer: JWT_ISSUER,
    algorithm: JWT_ALGORITHM,
  });
}

/**
 * Verify the provided token.
 * @param {string} token 
 * @param {(err: Error, decoded: jwt.JwtPayload) => void | undefined} onVerified OnVerified callback
 * @returns {void | Promise<jwt.JwtPayload>}
 */
export function verifyToken(token, onVerified) {
  const verifyToken = {
    issuer: JWT_ISSUER,
    audience: JWT_AUDIENCE
  };
  const verifyWithCallback = (verifyCallback) => {
    jwt.verify(token, JWT_SECRET, verifyToken, verifyCallback)
  }
  if (onVerified === undefined) {
    return verifyWithCallback(onVerified);
  }
  return new Promise((resolve, reject) => {
    verifyWithCallback((err, decoded) => {
      if (err) {
        return reject(err);
      }
      resolve(decoded);
    });
  })
}
