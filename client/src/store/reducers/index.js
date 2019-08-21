/* eslint-disable no-console */
import {
  PROCESS_USER_AUTHENTICATION,
  IS_AUTHENTICATING,
  PROCESS_USER,
  IS_LOADING,
} from '../constants/action-types';

import factions from '../constants/faction-data';
import beasts from '../constants/beast-data';
import augments from '../constants/augment-data';
import overview from '../constants/overview-data';
import rift from '../constants/rift-data';
import gamerules from '../constants/game-rule-data';
import users from '../constants/user-data';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  isLoading: false,
  user: JSON.parse(localStorage.getItem('user')),
  unConfirmedUser: JSON.parse(localStorage.getItem('unConfirmedUser')),
  factions,
  beasts,
  augments,
  overview,
  rift,
  gamerules,
  users,
};

const rootReducer = (state = initialState, action) => {
  if (PROCESS_USER_AUTHENTICATION === action.type) {
    console.log('[REDUX] User Authentication: ', action.payload);
    return Object.assign({}, state, {
      isAuthenticated: action.payload,
      isAuthenticating: false,
      user: (action.payload) ? state.user : null,
    });
  }

  if (IS_AUTHENTICATING === action.type) {
    console.log('[REDUX] Is Authenticating: ', action.payload);
    return Object.assign({}, state, {
      isAuthenticating: action.payload,
    });
  }

  if (IS_LOADING === action.type) {
    console.log('[REDUX] Is Loading: ', action.payload);
    return Object.assign({}, state, {
      isLoading: action.payload,
    });
  }

  if (PROCESS_USER === action.type) {
    console.log('[REDUX] Set/Get User: ', action.payload, action.isLoading);
    return Object.assign({}, state, {
      user: action.payload,
      isLoading: (action.isLoading === undefined) ? state.isLoading : action.isLoading,
    });
  }

  console.log('[REDUX] Uncaught Action: ', action);
  return state;
};

export default rootReducer;
