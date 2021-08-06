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
}

export default new User();
