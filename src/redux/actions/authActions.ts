/* eslint-disable no-console */
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import UserForm from '../../models/UserForm';
import { LoginResponse } from '../../services/auth/login';
import service from '../../services/service';
import { GlobalState } from '../reducers/rootReducer';

const AUTH_BEGIN_REQUEST = 'AUTH::BEGIN_REQUEST';
const AUTH_END_REQUEST = 'AUTH::END_REQUEST';

export type AuthActionType = typeof AUTH_BEGIN_REQUEST |
                              typeof AUTH_END_REQUEST;

export interface AuthAction extends Action<AuthActionType> {
  payload?: LoginResponse;
}

const beginRequest = (): AuthAction => ({
  type: AUTH_BEGIN_REQUEST,
});

const endRequest = (payload?: LoginResponse): AuthAction => ({
  type: AUTH_END_REQUEST,
  payload,
});

export const login = (payload: Pick<UserForm, 'username' | 'password'>) => {
  return async (dispatch: ThunkDispatch<void, GlobalState, AuthAction>) => {
    dispatch(beginRequest());
    const response = await service.authenticationService(payload);
    const accessToken = response.access_token;
    if (accessToken) {
      service.initService(accessToken);
      dispatch(endRequest({ ...response }));
    } else {
      dispatch(endRequest());
    }
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
