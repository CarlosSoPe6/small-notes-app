const DBClient = require('../db/DBClient');

class User extends DBClient {
  constructor() {
    super(
      {
        username: {
          type: String,
          unique: true,
          required: true
        },
        password: {
          type: String,
          required: true
        }
      },
      'Users',
      {
        'username': 1,
        'password': 1,
      }
    );
  }

  async getByUsername (username) {
    const query = { 'username': username };
    return await super.queryOne(query, super.listProjection);
  }

  /**
   * Creates a user document in the DB
   * @param {string} username 
   * @param {string} password 
   * @returns 
   */
  async createUser (username, password) {
    const user = new this.model({
      username,
      password,
    });
    return await super.create(user);
  }
}

module.exports = new User();
