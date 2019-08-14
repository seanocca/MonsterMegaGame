/* eslint-disable no-console */
import {
  PROCESS_USER_AUTHENTICATION,
  IS_AUTHENTICATING,
} from '../constants/action-types';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  factions: [
    {
      name: 'Voidborn',
      desc: 'blah',
    },
    {
      name: 'Bio',
      desc: 'blah',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  if (PROCESS_USER_AUTHENTICATION === action.type) {
    console.log('[REDUX] User Authentication: ', action.payload);
    return Object.assign({}, state, {
      isAuthenticated: action.payload,
      isAuthenticating: false,
    });
  }

  if (IS_AUTHENTICATING === action.type) {
    console.log('[REDUX] Is Authenticating: ', action.payload);
    return Object.assign({}, state, {
      isAuthenticating: action.payload,
    });
  }

  console.log('[REDUX] Uncaught Action: ', action);
  return state;
};

export default rootReducer;
