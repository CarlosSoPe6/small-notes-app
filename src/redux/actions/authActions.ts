/* eslint-disable no-console */
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import UserForm from '../../models/UserForm';
import { LoginResponse } from '../../services/auth/login';
import tokenUtils from '../../services/auth/session';
import service from '../../services/APIService';
import { GlobalState } from '../reducers/rootReducer';
import singupService from '../../services/auth/singup';
import { AlertDialogPayload, AppStateAction, showAlertDialog } from './appStateActions';

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

export const login = (
  payload: Pick<UserForm, 'username' | 'password'>,
  onErrordialog: AlertDialogPayload,
) => {
  return async (dispatch: ThunkDispatch<void, GlobalState, AuthAction | AppStateAction>) => {
    dispatch(beginRequest());
    try {
      const response = await service.authenticationService(payload);
      const accessToken = response.access_token;
      const expiresIn = response.expires_in;
      if (accessToken) {
        service.initService(accessToken);
        tokenUtils.setToken(accessToken, expiresIn);
        dispatch(endRequest({ ...response }));
      } else {
        dispatch(endRequest());
      }
    } catch (e) {
      dispatch(endRequest());
      onErrordialog.text = `${e.message}`;
      dispatch(showAlertDialog(onErrordialog));
    }
  };
};

export const singup = (payload: UserForm, onErrordialog: AlertDialogPayload) => {
  return async (dispatch: ThunkDispatch<void, GlobalState, AuthAction | AppStateAction>) => {
    try {
      dispatch(beginRequest());
      await singupService(payload);
    } catch (e) {
      onErrordialog.text = `${e.message}`;
      dispatch(showAlertDialog(onErrordialog));
    } finally {
      dispatch(endRequest());
    }
  };
};

export const initSession = (token: string, expiresIn: number): AuthAction => {
  service.initService(token);
  return endRequest({ access_token: token, expires_in: expiresIn, token_type: '' });
};
