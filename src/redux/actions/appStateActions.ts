import { Action } from 'redux';

export const APP_STATE_TOOGLE_COLLAPSE = 'APP_STATE::TOOGLE_COLLAPSE';
export const APP_STATE_ATTEMP_LOGIN = 'APP_STATE::ATTEMP_LOGIN';

type EditorActionType = typeof APP_STATE_TOOGLE_COLLAPSE |
                        typeof APP_STATE_ATTEMP_LOGIN;

export interface AppStateAction extends Action<EditorActionType> {
}

export const attempLogin = (): AppStateAction => ({
  type: 'APP_STATE::ATTEMP_LOGIN',
});

export const toogleCollapse = (): AppStateAction => ({
  type: 'APP_STATE::TOOGLE_COLLAPSE',
});

export const UNSAFE_SESSION_TRICK = attempLogin;
