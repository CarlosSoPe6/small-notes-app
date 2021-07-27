import { Action } from 'redux';

export const APP_STATE_TOOGLE_COLLAPSE = 'APP_STATE::TOOGLE_COLLAPSE';

type EditorActionType = typeof APP_STATE_TOOGLE_COLLAPSE;

export interface AppStateAction extends Action<EditorActionType> {
}

export const toogleCollapse = (): AppStateAction => ({
  type: 'APP_STATE::TOOGLE_COLLAPSE',
});
