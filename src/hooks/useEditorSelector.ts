import { useSelector } from 'react-redux';
import { EditorState } from '../redux/reducers/editorReducer';
import { GlobalState } from '../redux/reducers/rootReducer';

const useEditorSelector = () => {
  return useSelector<GlobalState, EditorState>(state => state.editor);
};

export default useEditorSelector;
