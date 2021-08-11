import { notes } from '../../config/apiURLs';
import Note from '../../models/Note';
import service from '../APIService';

export default {
  getAllNotes: () => {
    return service.get(notes.getAll());
  },
  createNote: (payload: Note) => {
    return service.post(notes.post(), payload);
  },
  updateNote: (id: string, payload: Note) => {
    return service.patch(notes.patch(id), payload);
  },
  deleteNote: (id: string) => {
    return service.delete(notes.delete(id));
  },
};
