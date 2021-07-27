import { Action } from 'redux';
import { Note } from '../reducers/editorReducer';

export const EDITOR_LOAD_ALL = 'EDITOR::LOAD_ALL';
export const EDITOR_ADD_NOTE = 'EDITOR::ADD_NOTE';
export const EDITOR_UPDATE_NOTE = 'EDITOR::UPDATE_NOTE';
export const EDITOR_LOAD_NOTE = 'EDITOR::LOAD_NOTE';
export const EDITOR_TOOGLE_DISPLAY_TYPE = 'EDITOR::TOOGLE_DISPLAY_TYPE';

type EditorActionType = typeof EDITOR_LOAD_ALL |
                        typeof EDITOR_ADD_NOTE |
                        typeof EDITOR_UPDATE_NOTE |
                        typeof EDITOR_LOAD_NOTE |
                        typeof EDITOR_TOOGLE_DISPLAY_TYPE;

export interface EditorAction extends Action<EditorActionType> {
  payload?: Note | number;
}

export const loadAllNotes = (): EditorAction => ({
  type: EDITOR_LOAD_ALL,
});

export const updateNote = (payload: Note): EditorAction => ({
  type: EDITOR_UPDATE_NOTE,
  payload,
});

export const addNote = (title: string): EditorAction => ({
  type: EDITOR_ADD_NOTE,
  payload: {
    id: Date.now().toString(10),
    title,
    body: '',
  },
});

export const loadNote = (id: number): EditorAction => ({
  type: EDITOR_LOAD_NOTE,
  payload: id,
});

export const toogleDisplayType = (): EditorAction => ({
  type: EDITOR_TOOGLE_DISPLAY_TYPE,
});
