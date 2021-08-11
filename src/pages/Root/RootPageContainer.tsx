import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import routes from '../../config/routes';
import { GlobalState } from '../../redux/reducers/rootReducer';

const RootPageContainer = () => {
  const history = useHistory();
  const authState: boolean | null = useSelector<GlobalState, boolean | null>((state) => {
    return state.auth.isAuthenticated;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (authState) {
      history.replace(routes.HOME);
    } else {
      history.replace(routes.LOG_IN);
    }
  }, [authState, dispatch, history]);
  return (<div />);
};

export default RootPageContainer;
