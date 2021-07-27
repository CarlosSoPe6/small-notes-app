import { Reducer } from 'redux';
import { AppStateAction } from '../actions/appStateActions';

export interface AppStateState {
  sidebarCollapsed: boolean;
}

const initialState: AppStateState = {
  sidebarCollapsed: false,
};

const toogleCollapse = (state: AppStateState): AppStateState => {
  const { sidebarCollapsed } = state;
  return { ...state, sidebarCollapsed: (!sidebarCollapsed) };
};

const appStateReducer: Reducer<AppStateState, AppStateAction> =
(state = initialState, action: AppStateAction) => {
  const { type } = action;
  switch (type) {
    case 'APP_STATE::TOOGLE_COLLAPSE':
      return toogleCollapse(state);
    default:
      return state;
  }
};

export default appStateReducer;
