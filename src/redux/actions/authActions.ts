/* eslint-disable no-console */
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import UserForm from '../../models/UserForm';
import { GlobalState } from '../reducers/rootReducer';

const AUTH_BEGIN_REQUEST = 'AUTH::BEGIN_REQUEST';
const AUTH_END_REQUEST = 'AUTH::END_REQUEST';

export type AuthActionType = typeof AUTH_BEGIN_REQUEST |
                              typeof AUTH_END_REQUEST;

export interface AuthAction extends Action<AuthActionType> {
  payload?: Object;
}

const beginRequest = (): AuthAction => ({
  type: AUTH_BEGIN_REQUEST,
});

const endRequest = (): AuthAction => ({
  type: AUTH_END_REQUEST,
});

export const login = (payload: Pick<UserForm, 'username' | 'password'>) => {
  return (dispatch: ThunkDispatch<void, GlobalState, AuthAction>) => {
    dispatch(beginRequest());
    setTimeout(() => {
      dispatch(endRequest());
      console.log(payload);
    }, 2000);
  };
};

export const singup = (payload: UserForm) => {
  return (dispatch: ThunkDispatch<void, GlobalState, AuthAction>) => {
    dispatch(beginRequest());
    setTimeout(() => {
      dispatch(endRequest());
      console.log(payload);
    }, 2000);
  };
};
