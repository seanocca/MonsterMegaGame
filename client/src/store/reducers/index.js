/* eslint-disable no-console */
import {
  PROCESS_USER_AUTHENTICATION,
  IS_AUTHENTICATING,
} from '../constants/action-types';

import factions from '../constants/faction-data';
import beasts from '../constants/beast-data';
import augments from '../constants/augment-data';
import overview from '../constants/overview-data';
import rift from '../constants/rift-data';
import gamerules from '../constants/game-rule-data';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  factions,
  beasts,
  augments,
  overview,
  rift,
  gamerules,
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
