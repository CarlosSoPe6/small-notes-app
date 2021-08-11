import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import routes from '../config/routes';
import { GlobalState } from '../redux/reducers/rootReducer';

const useAuthRedirect = () => {
  const isAuth = useSelector<GlobalState, boolean>(s => s.auth.isAuthenticated);
  const history = useHistory();
  useEffect(() => {
    if (isAuth) {
      history.replace(routes.ROOT);
    }
  }, [history, isAuth]);
};

export default useAuthRedirect;
