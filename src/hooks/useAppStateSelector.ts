import { useSelector } from 'react-redux';
import { AppStateState } from '../redux/reducers/appStateReducer';
import { GlobalState } from '../redux/reducers/rootReducer';

const useAppStateSelector = () => {
  return useSelector<GlobalState, AppStateState>(state => state.appState);
};

export default useAppStateSelector;
