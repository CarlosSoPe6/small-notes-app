const { Router } = require('express');

const {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} = require('../controllers/notes.controller');

const router = Router();

router.get('/', getAllNotes);
router.post('/', createNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
