import { createStore } from 'redux';
import { editorReducer } from './reducers/editorReducer';

const store = createStore(editorReducer);

export default store;
