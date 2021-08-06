const NotesModel = require('../models/Notes.model');

/**
 * Gets all the notes of the session user
 * @method GET
 * @param {Express.Request} req Request Object
 * @param {Express.Response} res Response Object
 */
async function getAllNotes(req, res) {
  const { sessionUser: { username } } = req;
  try {
    const query = await NotesModel.getNotesByUser(username);
    if (query.length === 0) {
      return res.sendStatus(404);
    }
    res.json(query);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

/**
 * Creates a new note
 * @method POST
 * @param {Express.Request} req Request Object
 * @param {Express.Response} res Response Object
 */
async function createNote(req, res) {
  const { title, body } = req.body;
  const { sessionUser: { username } } = req;
  try {
    const query = await NotesModel.createNote(title, body, username);
    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}

/**
 * Updates a note
 * @method PATCH
 * @param {Express.Request} req Request Object
 * @param {Express.Response} res Response Object
 */
async function updateNote(req, res) {
  const { id, title, body } = req.body;
  const { sessionUser: { username } } = req;
  try {
    const result = await NotesModel.updateNote(id, title, body, username);
    res.status(200).json(result);
  } catch {
    res.sendStatus(500);
  }
}

/**
 * Deletes a note
 * @method DELETE
 * @param {Express.Request} req Request Object
 * @param {Express.Response} res Response Object
 */
async function deleteNote(req, res) {
  const { id, title, body } = req.body;
  const { sessionUser: { username } } = req;
  try {
    const result = await NotesModel.deleteNote(id, username);
    res.status(200).json(result);
  } catch {
    res.sendStatus(500);
  }
}

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};
