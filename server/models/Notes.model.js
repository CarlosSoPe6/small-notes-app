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

const modelName = 'Notes';

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
    const query = { username };
    return await super.query(query, this.listProjection);
  }

  async getSingleNote (id) {
    const query = { id };
    return await super.queryOne(query, this.listProjection);
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
      id,
      username
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
      id,
      username,
    };
    return await super.delete(query);
  }
}

module.exports = new Notes();
