import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import routes from '../../config/routes';
import { attempLogin } from '../../redux/actions/appStateActions';
import { GlobalState } from '../../redux/reducers/rootReducer';

const RootPageContainer = () => {
  const history = useHistory();
  const authState: boolean | null = useSelector<GlobalState, boolean | null>((state) => {
    return state.appState.auth;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    switch (authState) {
      case false:
        history.replace(routes.LOG_IN);
        break;
      case true:
        history.replace(routes.HOME);
        break;
      default:
        dispatch(attempLogin());
    }
  }, [authState, dispatch, history]);
  return (<div />);
};

export default RootPageContainer;
