import useAppStateSelector from '../../../hooks/useAppStateSelector';
import useEditorSelector from '../../../hooks/useEditorSelector';

const useHomeSelector = () => {
  const editor = useEditorSelector();
  const appState = useAppStateSelector();
  const { notes, loadedNote, displayType } = editor;
  const { sidebarCollapsed } = appState;
  return {
    notes,
    loadedNote,
    displayType,
    isCollapsed: sidebarCollapsed,
  };
};

export default useHomeSelector;
