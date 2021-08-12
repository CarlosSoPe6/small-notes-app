import { Reducer } from 'redux';
import { AuthAction } from '../actions/authActions';

export interface AuthState {
  isFetching: boolean;
  isAuthenticated: boolean;
}

const defaultState: AuthState = {
  isFetching: false,
  isAuthenticated: false,
};

const beginRequest = (state: AuthState): AuthState => ({
  ...state,
  isFetching: true,
});

const endRequest = (state: AuthState, action: AuthAction): AuthState => {
  const { payload } = action;
  let isAuthenticated = false;
  if (payload !== undefined) {
    isAuthenticated = true;
  }
  return {
    ...state,
    isFetching: false,
    isAuthenticated,
  };
};

const authReducer: Reducer<AuthState, AuthAction> = (state = defaultState, action) => {
  const { type } = action;
  switch (type) {
    case 'AUTH::BEGIN_REQUEST':
      return beginRequest(state);
    case 'AUTH::END_REQUEST':
      return endRequest(state, action);
    default:
      return state;
  }
};

export default authReducer;
