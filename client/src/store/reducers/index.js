/* eslint-disable no-console */
import {
  PROCESS_USER_AUTHENTICATION,
} from '../constants/action-types';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
};

const rootReducer = (state = initialState, action) => {
  if (PROCESS_USER_AUTHENTICATION === action.type) {
    console.log('[REDUX] User Authentication: ', action.payload);
    return Object.assign({}, state, {
      isAuthenticated: action.payload,
      isAuthenticating: false,
    });
  }

  console.log('[REDUX] Uncaught Action: ', action);
  return state;
};

export default rootReducer;
