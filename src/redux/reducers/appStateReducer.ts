import { Reducer } from 'redux';
import { AppStateAction } from '../actions/appStateActions';

export interface AppStateState {
  sidebarCollapsed: boolean;
  auth: null | boolean;
}

const initialState: AppStateState = {
  sidebarCollapsed: false,
  auth: null,
};

const toogleCollapse = (state: AppStateState): AppStateState => {
  const { sidebarCollapsed } = state;
  return { ...state, sidebarCollapsed: (!sidebarCollapsed) };
};

const attempLogin = (state: AppStateState): AppStateState => {
  return { ...state, auth: true };
};

const appStateReducer: Reducer<AppStateState, AppStateAction> =
(state = initialState, action: AppStateAction) => {
  const { type } = action;
  switch (type) {
    case 'APP_STATE::TOOGLE_COLLAPSE':
      return toogleCollapse(state);
    case 'APP_STATE::ATTEMP_LOGIN':
      return attempLogin(state);
    default:
      return state;
  }
};

export default appStateReducer;
