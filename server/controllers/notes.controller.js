const { HTTTP_STATUS_CODES } = require('../config/constants');
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
      return res.sendStatus(HTTTP_STATUS_CODES.NOT_FOUND);
    }
    res.json(query);
  } catch (e) {
    console.log(e);
    res.sendStatus(HTTTP_STATUS_CODES.INTERNAL_ERROR);
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
    res.status(HTTTP_STATUS_CODES.CREATED).json(query);
  } catch (e) {
    res.sendStatus(HTTTP_STATUS_CODES.INTERNAL_ERROR);
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
    res.status(HTTTP_STATUS_CODES.OK).json(result);
  } catch {
    res.sendStatus(HTTTP_STATUS_CODES.INTERNAL_ERROR);
  }
}

/**
 * Deletes a note
 * @method DELETE
 * @param {Express.Request} req Request Object
 * @param {Express.Response} res Response Object
 */
async function deleteNote(req, res) {
  const { id } = req.params;
  const { sessionUser: { username } } = req;
  try {
    const result = await NotesModel.deleteNote(id, username);
    console.log(result);
    res.status(HTTTP_STATUS_CODES.OK).json(result);
  } catch {
    res.sendStatus(HTTTP_STATUS_CODES.INTERNAL_ERROR);
  }
}

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};
