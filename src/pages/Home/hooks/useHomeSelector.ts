import useAppStateSelector from '../../../hooks/useAppStateSelector';
import useEditorSelector from '../../../hooks/useEditorSelector';

const useHomeSelector = () => {
  const editor = useEditorSelector();
  const appState = useAppStateSelector();
  const { notes, loadedNote, displayType, isFetching } = editor;
  const { sidebarCollapsed } = appState;
  return {
    notes,
    isFetching,
    loadedNote,
    displayType,
    isCollapsed: sidebarCollapsed,
  };
};

export default useHomeSelector;
