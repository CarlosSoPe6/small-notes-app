import { Action } from 'redux';

export const APP_STATE_TOOGLE_COLLAPSE = 'APP_STATE::TOOGLE_COLLAPSE';
export const APP_STATE_ATTEMP_LOGIN = 'APP_STATE::ATTEMP_LOGIN';
export const APP_STATE_HIDE_ALERT_DIALOG = 'APP_STATE::HIDE_ALERT_DIALOG';
export const APP_STATE_SHOW_ALERT_DIALOG = 'APP_STATE::SHOW_ALERT_DIALOG';

type AppStateType = typeof APP_STATE_TOOGLE_COLLAPSE |
                        typeof APP_STATE_ATTEMP_LOGIN |
                        typeof APP_STATE_HIDE_ALERT_DIALOG |
                        typeof APP_STATE_SHOW_ALERT_DIALOG;

export interface AlertDialogPayload {
  onAcept: () => void;
  onCancel: () => void;
  text: string;
}
export interface AppStatePayload {
  alertDialog?: AlertDialogPayload;
}
export interface AppStateAction extends Action<AppStateType> {
  payload?: AppStatePayload;
}

export const attempLogin = (): AppStateAction => ({
  type: 'APP_STATE::ATTEMP_LOGIN',
});

export const toogleCollapse = (): AppStateAction => ({
  type: 'APP_STATE::TOOGLE_COLLAPSE',
});

export const hideAlertDialog = (): AppStateAction => ({
  type: APP_STATE_HIDE_ALERT_DIALOG,
});

export const showAlertDialog = (alertDialog: AlertDialogPayload): AppStateAction => ({
  type: APP_STATE_SHOW_ALERT_DIALOG,
  payload: {
    alertDialog,
  },
});

export const UNSAFE_SESSION_TRICK = attempLogin;
