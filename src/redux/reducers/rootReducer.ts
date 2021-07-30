import { CombinedState, combineReducers, Reducer } from 'redux';
import { AppStateAction } from '../actions/appStateActions';
import { EditorAction } from '../actions/editorActions';
import appStateReducer, { AppStateState } from './appStateReducer';
import authReducer, { AuthState } from './authReducer';
import editorReducer, { EditorState } from './editorReducer';

export type GlobalState = CombinedState<{
  appState: AppStateState,
  editor: EditorState,
  auth: AuthState,
}>;

export type GlobalActions = AppStateAction | EditorAction;

const rootReducer: Reducer<GlobalState, GlobalActions> = combineReducers({
  appState: appStateReducer,
  editor: editorReducer,
  auth: authReducer,
});

export default rootReducer;
