import { Router } from 'express';

import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notes.controller';

const router = Router();

router.get('/', getAllNotes);
router.post('/', createNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
