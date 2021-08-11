import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Note from '../../models/Note';
import { GlobalState } from '../reducers/rootReducer';
import notesService from '../../services/notes/notesService';

export const EDITOR_LOAD_ALL = 'EDITOR::LOAD_ALL';
export const EDITOR_ADD_NOTE = 'EDITOR::ADD_NOTE';
export const EDITOR_UPDATE_NOTE = 'EDITOR::UPDATE_NOTE';
export const EDITOR_LOAD_NOTE = 'EDITOR::LOAD_NOTE';
export const EDITOR_TOOGLE_DISPLAY_TYPE = 'EDITOR::TOOGLE_DISPLAY_TYPE';
export const EDITOR_REMOVE_NOTE = 'EDITOR::REMOVE_NOTE';
export const EDITOR_BEGIN_FETCH = 'EDITOR::BEGIN_FETCH';
export const EDITOR_END_FETCH = 'EDITOR::END_FETCH';

type EditorActionType = typeof EDITOR_LOAD_ALL |
                        typeof EDITOR_ADD_NOTE |
                        typeof EDITOR_UPDATE_NOTE |
                        typeof EDITOR_LOAD_NOTE |
                        typeof EDITOR_TOOGLE_DISPLAY_TYPE |
                        typeof EDITOR_REMOVE_NOTE |
                        typeof EDITOR_BEGIN_FETCH |
                        typeof EDITOR_END_FETCH;

export interface EditorAction extends Action<EditorActionType> {
  payload?: Note | number | Note[];
}

const beginGetRequest = (): EditorAction => ({
  type: EDITOR_BEGIN_FETCH,
});

const setNotes = (payload: Note[]): EditorAction => ({
  type: EDITOR_LOAD_ALL,
  payload,
});

const endGetRequest = (): EditorAction => ({
  type: EDITOR_END_FETCH,
});

export const loadAllNotes = () => {
  return async (dispatch: ThunkDispatch<void, GlobalState, EditorAction>) => {
    dispatch(beginGetRequest());
    const response = await notesService.getAllNotes();
    const notes: Note[] = await response.json();
    dispatch(setNotes(notes));
    dispatch(endGetRequest());
  };
};

export const removeNote = (id: string) => {
  return async (dispatch: ThunkDispatch<void, GlobalState, EditorAction>) => {
    await notesService.deleteNote(id);
    dispatch({
      type: EDITOR_REMOVE_NOTE,
    });
  };
};

export const updateNote = (id: string, payload: Note) => {
  return async (dispatch: ThunkDispatch<void, GlobalState, EditorAction>) => {
    await notesService.updateNote(id, payload);
    dispatch({
      type: EDITOR_UPDATE_NOTE,
      payload,
    });
  };
};

export const addNote = (title: string) => {
  return async (dispatch: ThunkDispatch<void, GlobalState, EditorAction>) => {
    const payload = {
      id: '',
      title,
      body: '',
    };
    const response = await notesService.createNote(payload);
    const data = await response.json();
    const { id } = data;
    dispatch({
      type: EDITOR_ADD_NOTE,
      payload: { ...payload, id },
    });
  };
};

export const loadNote = (id: number): EditorAction => ({
  type: EDITOR_LOAD_NOTE,
  payload: id,
});

export const toogleDisplayType = (): EditorAction => ({
  type: EDITOR_TOOGLE_DISPLAY_TYPE,
});
