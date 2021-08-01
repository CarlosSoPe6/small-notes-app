import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { GlobalState } from '../redux/reducers/rootReducer';

const useAuthRedirect = () => {
  const isAuth = useSelector<GlobalState, boolean>(s => s.auth.isAuthenticated);
  const history = useHistory();
  useEffect(() => {
    if (isAuth) {
      history.replace('/');
    }
  }, [history, isAuth]);
};

export default useAuthRedirect;
