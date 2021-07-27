import { CombinedState, combineReducers, Reducer } from 'redux';
import { AppStateAction } from '../actions/appStateActions';
import { EditorAction } from '../actions/editorActions';
import appStateReducer, { AppStateState } from './appStateReducer';
import editorReducer, { EditorState } from './editorReducer';

export type GlobalState = CombinedState<{
  appState: AppStateState,
  editor: EditorState,
}>;

export type GlobalActions = AppStateAction | EditorAction;

const rootReducer: Reducer<GlobalState, GlobalActions> = combineReducers({
  appState: appStateReducer,
  editor: editorReducer,
});

export default rootReducer;
