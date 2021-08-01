import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UNSAFE_SESSION_TRICK } from '../../../redux/actions/appStateActions';
import { loadAllNotes } from '../../../redux/actions/editorActions';
import useHomeSelector from './useHomeSelector';

const useInitHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllNotes());
    dispatch(UNSAFE_SESSION_TRICK());
  }, [dispatch]);
  return useHomeSelector();
};

export default useInitHome;
