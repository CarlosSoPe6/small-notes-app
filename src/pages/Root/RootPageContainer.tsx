import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { attempLogin } from '../../redux/actions/appStateActions';
import { GlobalState } from '../../redux/reducers/rootReducer';

const RootPageContainer = () => {
  const history = useHistory();
  const authState: boolean | null = useSelector<GlobalState, boolean | null>((state) => {
    return state.appState.auth;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (authState === null) {
      dispatch(attempLogin());
    } else {
      const newRoute = authState ? '/home' : '/login';
      history.replace(newRoute);
    }
  }, [authState, dispatch, history]);
  return (<div />);
};

export default RootPageContainer;
