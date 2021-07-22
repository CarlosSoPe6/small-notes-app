import { Note } from '../reducers/editorReducer';

export const EDITOR_ADD_NOTE = 'EDITOR::ADD_NOTE';
export const EDITOR_UPDATE_NOTE = 'EDITOR::UPDATE_NOTE';
export const EDITOR_LOAD_NOTE = 'EDITOR::LOAD_NOTE';

type EditorActionType = typeof EDITOR_ADD_NOTE |
                        typeof EDITOR_UPDATE_NOTE |
                        typeof EDITOR_LOAD_NOTE;

export interface EditorAction {
  type: EditorActionType;
  payload: Note | number;
}

export const updateNote = (payload: Note): EditorAction => ({
  type: EDITOR_UPDATE_NOTE,
  payload,
});

export const addNote = (title: string): EditorAction => ({
  type: EDITOR_ADD_NOTE,
  payload: {
    title,
    body: '',
  },
});

export const loadNote = (id: number): EditorAction => ({
  type: EDITOR_LOAD_NOTE,
  payload: id,
});
