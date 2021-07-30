import { Reducer } from 'redux';
import { AuthAction } from '../actions/authActions';

export interface AuthState {
  isFetching: boolean;
}

const defaultState: AuthState = {
  isFetching: false,
};

const beginRequest = (state: AuthState): AuthState => ({
  ...state,
  isFetching: true,
});

const endRequest = (state: AuthState): AuthState => ({
  ...state,
  isFetching: false,
});

const authReducer: Reducer<AuthState, AuthAction> = (state = defaultState, action) => {
  const { type } = action;
  switch (type) {
    case 'AUTH::BEGIN_REQUEST':
      return beginRequest(state);
    case 'AUTH::END_REQUEST':
      return endRequest(state);
    default:
      return state;
  }
};

export default authReducer;
