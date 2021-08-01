import Note from '../../models/Note';
import service from '../service';

export default {
  getAllNotes: () => {
    return service.get('notes');
  },
  createNote: (payload: Note) => {
    return service.post('notes', payload);
  },
  updateNote: (id: string, payload: Note) => {
    return service.patch(`notes/${id}`, payload);
  },
  deleteNote: (id: string) => {
    return service.delete(`notes/${id}`);
  },
};
