import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadAllNotes } from '../../../redux/actions/editorActions';
import useHomeSelector from './useHomeSelector';

const useInitHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllNotes());
  }, [dispatch]);
  return useHomeSelector();
};

export default useInitHome;
