import { Reducer } from 'redux';
import { EditorAction } from '../actions/editorActions';
import EditorReducerError from './EditorReducerError';

export interface EditorState {
  notes: Note[];
  loadedNote?: number;
}

export interface Note {

  title: string;
  body: string;
}

const initialState: EditorState = {
  notes: [
    {
      title: 'Ejemplo',
      body: '# Ejemplo\nSaludo',
    },
  ],
  loadedNote: undefined,
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
  return {
    ...state,
    notes: newNotes,
  };
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
  if (typeof payload === 'number') {
    throw new EditorReducerError('Invalid action payload');
  }
  const updatedNotes = [...notes];
  return {
    ...state,
    notes: [...updatedNotes],
  };
};

export const editorReducer: Reducer<EditorState, EditorAction> =
(state = initialState, action: EditorAction) => {
  const { type } = action;
  switch (type) {
    case 'EDITOR::ADD_NOTE':
      return saveNote(state, action);
    case 'EDITOR::LOAD_NOTE':
      return loadNote(state, action);
    case 'EDITOR::UPDATE_NOTE':
      return updateNote(state, action);
    default:
      return state;
  }
};
