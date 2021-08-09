import { Reducer } from 'redux';
import { AppStateAction } from '../actions/appStateActions';
import AppStateReducerError from './AppStateReducerError';

export interface AppStateState {
  sidebarCollapsed: boolean;
  alertDialogOnAccept: () => void;
  alertDialogOnCancel: () => void;
  alertDialogText: string;
  alertDialogSpawns: boolean;
}

const initialState: AppStateState = {
  sidebarCollapsed: false,
  alertDialogSpawns: false,
  alertDialogOnAccept: () => {},
  alertDialogOnCancel: () => {},
  alertDialogText: 'Ejemplo',
};

const toogleCollapse = (state: AppStateState): AppStateState => {
  const { sidebarCollapsed } = state;
  return { ...state, sidebarCollapsed: (!sidebarCollapsed) };
};

const hideAlertDialog = (state: AppStateState): AppStateState => ({
  ...state,
  alertDialogSpawns: false,
});

const showAlertDialog = (state: AppStateState, action: AppStateAction): AppStateState => {
  const { payload } = action;
  if (payload === undefined) {
    throw new AppStateReducerError('Invalid payload');
  }
  const { alertDialog } = payload;
  if (alertDialog === undefined) {
    throw new AppStateReducerError('Invalid payload');
  }
  const { onAcept, onCancel, text } = alertDialog;
  return {
    ...state,
    alertDialogSpawns: true,
    alertDialogOnAccept: onAcept,
    alertDialogOnCancel: onCancel,
    alertDialogText: text,
  };
};

const appStateReducer: Reducer<AppStateState, AppStateAction> =
(state = initialState, action: AppStateAction) => {
  const { type } = action;
  switch (type) {
    case 'APP_STATE::TOOGLE_COLLAPSE':
      return toogleCollapse(state);
    case 'APP_STATE::HIDE_ALERT_DIALOG':
      return hideAlertDialog(state);
    case 'APP_STATE::SHOW_ALERT_DIALOG':
      return showAlertDialog(state, action);
    default:
      return state;
  }
};

export default appStateReducer;
