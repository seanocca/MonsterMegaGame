/* eslint-disable no-console */
import {
  USER_AUTHENTICATION,
} from '../constants/action-types';

const initialState = {
  isAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  if (USER_AUTHENTICATION === action.type) {
    console.log('[REDUX] User Authentication: ', action.payload);
    return Object.assign({}, state, {
      isAuthenticated: action.payload,
    });
  }

  console.log('[REDUX] Uncaught Action: ', action);
  return state;
};

export default rootReducer;
