import { Reducer } from 'redux';
import Note from '../../models/Note';
import { DisplayType } from '../../pages/Home/components/TextEditor';
import { EditorAction } from '../actions/editorActions';
import EditorReducerError from './EditorReducerError';

export interface EditorState {
  notes: Note[];
  isFetching: boolean;
  loadedNote?: number;
  displayType: DisplayType;
}

const initialState: EditorState = {
  notes: [],
  isFetching: false,
  loadedNote: undefined,
  displayType: 'VIEW',
};

const loadAllNotes = (state: EditorState, action: EditorAction): EditorState => {
  const { payload } = action;
  if (!Array.isArray(payload)) {
    throw new EditorReducerError('Unexpexted non-array type');
  }
  const newState = { ...state, notes: payload };
  return newState;
};

const removeNote = (state: EditorState): EditorState => {
  if (typeof state.loadedNote === 'number') {
    const { notes, loadedNote } = state;
    const newNotes = [...notes];
    newNotes.splice(loadedNote, 1);
    const newState = { ...state, loadedNote: undefined, notes: newNotes };
    return newState;
  }
  return state;
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
  if (Array.isArray(payload)) {
    throw new EditorReducerError('Invalid action payload');
  }
  const newNotes = [...notes];
  newNotes[loadedNote] = payload;
  const newState = {
    ...state,
    notes: newNotes,
  };
  return newState;
};

const loadNote = (state: EditorState, action: EditorAction): EditorState => {
  const { payload } = action;
  if (typeof payload !== 'number') {
    throw new EditorReducerError('Invalid action payload');
  }
  if (Array.isArray(payload)) {
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
  if (Array.isArray(payload)) {
    throw new EditorReducerError('Invalid action payload');
  }
  const updatedNotes = [...notes, payload];
  const newState = {
    ...state,
    notes: [...updatedNotes],
  };
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
  switch (type) {
    case 'EDITOR::LOAD_ALL':
      return loadAllNotes(state, action);
    case 'EDITOR::REMOVE_NOTE':
      return removeNote(state);
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
};

export default editorReducer;
