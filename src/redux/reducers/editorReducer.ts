import { Reducer } from 'redux';
import { DisplayType } from '../../pages/Home/components/TextEditor';
import { EditorAction } from '../actions/editorActions';
import EditorReducerError from './EditorReducerError';

export interface EditorState {
  notes: Note[];
  loadedNote?: number;
  displayType: DisplayType;
}

export interface Note {
  id: string;
  title: string;
  body: string;
}

const initialState: EditorState = {
  notes: [],
  loadedNote: undefined,
  displayType: 'VIEW',
};

const saveNotes = (state: EditorState) => {
  localStorage.setItem('notes', JSON.stringify(state));
};

const loadAllNotes = (state: EditorState): EditorState => {
  const rawNotes = localStorage.getItem('notes');
  if (rawNotes === null) {
    localStorage.setItem('notes', JSON.stringify(state));
    return state;
  }
  const newState: EditorState = JSON.parse(rawNotes);
  return newState;
};

const updateNote = (state: EditorState, action: EditorAction): EditorState => {
  const { notes, loadedNote } = state;
  const { payload } = action;
  if (payload === undefined || typeof payload === 'number') {
    throw new EditorReducerError('Invalid action payload');
  }
  if (loadedNote === undefined) {
    throw new EditorReducerError('Invalid action payload');
  }
  const newNotes = [...notes];
  newNotes[loadedNote] = payload;
  const newState = {
    ...state,
    notes: newNotes,
  };
  saveNotes(newState);
  return newState;
};

const loadNote = (state: EditorState, action: EditorAction): EditorState => {
  const { payload } = action;
  if (typeof payload !== 'number') {
    throw new EditorReducerError('Invalid action payload');
  }
  return {
    ...state,
    loadedNote: payload,
  };
};

const saveNote = (state: EditorState, action: EditorAction): EditorState => {
  const { notes } = state;
  const { payload } = action;
  if (typeof payload === 'number' || payload === undefined) {
    throw new EditorReducerError('Invalid action payload');
  }
  const updatedNotes = [...notes, payload];
  const newState = {
    ...state,
    notes: [...updatedNotes],
  };
  saveNotes(newState);
  return newState;
};

const toogleDisplayType = (state: EditorState): EditorState => {
  const { displayType } = state;
  let newDisplayType: DisplayType = 'EDIT';
  if (displayType === 'EDIT') {
    newDisplayType = 'VIEW';
  }
  return { ...state, displayType: newDisplayType };
};

const editorReducer: Reducer<EditorState, EditorAction> =
(state = initialState, action: EditorAction) => {
  const { type } = action;
  let newState;
  switch (type) {
    case 'EDITOR::LOAD_ALL':
      return loadAllNotes(state);
    case 'EDITOR::ADD_NOTE':
      return saveNote(state, action);
    case 'EDITOR::LOAD_NOTE':
      return loadNote(state, action);
    case 'EDITOR::UPDATE_NOTE':
      return updateNote(state, action);
    case 'EDITOR::TOOGLE_DISPLAY_TYPE':
      return toogleDisplayType(state);
    default:
      return state;
  }
  return newState;
};

export default editorReducer;
