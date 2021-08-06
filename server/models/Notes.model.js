const DBClient = require('../db/DBClient');

const schema = {
  id: {
    type: Number,
    required: true,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  }
};

const modelName = 'Users';

const projection = {
  'id': 1,
  'title': 1,
  'body': 1,
};

class Notes extends DBClient {
  constructor() {
    super(
      schema,
      modelName,
      projection
    );
  }

  async getNotesByUser (username) {
    const query = { 'username': username };
    return await super.query(query, super.listProjection);
  }

  async getSingleNote (id) {
    const query = { 'id': id };
    return await super.queryOne(query, super.listProjection);
  }

  async createNote (title, body, username) {
    const note = new super.model({
      title,
      body,
      username,
    });
    return await super.save(note);
  }

  async updateNote (id, title, body, username) {
    const query = {
      'id': id,
      'username': username
    };
    const note = await this.getSingleNote(id);
    if (note === undefined) {
      throw new Error('User does not have note');
    }
    note.title = title;
    note.body = body;
    return await super.update(query, note);
  }

  async deleteNote(id, username) {
    const query = {
      'id': id,
      'username': username,
    };
    return await super.delete(query);
  }
}

export default new Notes();
