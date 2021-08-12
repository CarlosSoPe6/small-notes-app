const bcrypt = require('bcryptjs');
const config = require('../config/crypto');

const salts = bcrypt.genSaltSync(config.SALT_ROUNDS);

/**
 * Hashes a password asyncronously.
 * @param {string} password Password to hash.
 * @returns {Promise<string>} Promise with the hashed password.
 */
function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, salts, (err, hash) => {
      if (err){
        return reject(err);
      }
      resolve(hash);
    });
  });  
}

/**
 * Compares a password and it´s hash stored in the DB.
 * @param {string} password Password to compare.
 * @param {string} hash Hash to compare.
 * @returns {Promise<boolean>}
 */
function compareHash(password, hash) {
  return bcrypt.compare(password, hash);
}

module.exports = {
  hashPassword,
  compareHash,
};
