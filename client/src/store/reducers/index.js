/* eslint-disable no-console */
import {
  PROCESS_USER_AUTHENTICATION,
  IS_AUTHENTICATING,
  PROCESS_USER,
  IS_LOADING,
  CREATE_FACTION, EDIT_FACTION, PROCESS_DOWNLOAD_FACTIONS,
  CREATE_AUGMENT, EDIT_AUGMENT,
  CREATE_BEAST, EDIT_BEAST,
  IS_STALE,
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
  isDownload: {
    factionData: localStorage.getItem('factionsRecheck'),
    augmentData: 0,
  },
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
  if (IS_STALE === action.type) {
    return Object.assign({}, state, {
      isDownload: {
        ...state.isDownload,
        ...action.payload,
      },
    });
  }

  if (PROCESS_USER_AUTHENTICATION === action.type) {
    console.log('[REDUX] User Authentication: ', action.payload);
    return Object.assign({}, state, {
      isAuthenticated: action.payload,
      isAuthenticating: false,
      user: action.payload ? state.user : null,
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
      isLoading:
        action.isLoading === undefined ? state.isLoading : action.isLoading,
    });
  }

  // Factions
  if (PROCESS_DOWNLOAD_FACTIONS === action.type) {
    console.log('[REDUX] Download factions: ', action.payload);
    return Object.assign({}, state, {
      factions: action.payload,
    });
  }
  if (CREATE_FACTION === action.type) {
    console.log('[REDUX] Create faction: ', action.payload);
    return Object.assign({}, state, {
      factions: state.factions.concat(action.payload),
      beasts: state.beasts.concat({
        faction: action.payload.name,
        beasts: [],
      }),
      augments: state.augments.concat({
        faction: action.payload.name,
        beasts: [],
      }),
    });
  }
  if (EDIT_FACTION === action.type) {
    const {
      name, leader, faculty, desc,
    } = action.payload;
    console.log('[REDUX] Edit faction: ', action.payload);
    return Object.assign({}, state, {
      factions: state.factions.map((faction) => {
        if (faction.id === action.payload.id) {
          return Object.assign({}, faction, {
            name,
            leader,
            faculty,
            desc,
          });
        }
        return faction;
      }),
    });
  }

  // Augments
  if (CREATE_AUGMENT === action.type) {
    console.log('[REDUX] Create augment: ', action.payload);
    return Object.assign({}, state, {
      augments: state.augments.map((factionAugments) => {
        if (factionAugments.faction === action.payload.faction) {
          return Object.assign(
            {},
            { faction: factionAugments.faction },
            {
              augments: factionAugments.augments.concat(action.payload.augment),
            },
          );
        }
        return factionAugments;
      }),
    });
  }
  if (EDIT_AUGMENT === action.type) {
    const {
      id, type, name, desc,
    } = action.payload.augment;
    const augmentAction = action.payload.augment.action;
    console.log('[REDUX] Edit augment: ', action.payload);
    return Object.assign({}, state, {
      augments: state.augments.map((factionAugments) => {
        if (factionAugments.faction === action.payload.faction) {
          return Object.assign(
            {},
            { faction: factionAugments.faction },
            {
              augments: factionAugments.augments.map((augment) => {
                if (augment.id === id) {
                  return Object.assign({}, augment, {
                    id,
                    type,
                    name,
                    action: augmentAction,
                    desc,
                  });
                }
                return augment;
              }),
            },
          );
        }
        return factionAugments;
      }),
    });
  }

  // beasts
  if (CREATE_BEAST === action.type) {
    console.log('[REDUX] Create beast: ', action.payload);
    return Object.assign({}, state, {
      beasts: state.beasts.map((factionBeasts) => {
        if (factionBeasts.faction === action.payload.faction) {
          return Object.assign(
            {},
            { faction: factionBeasts.faction },
            {
              beasts: factionBeasts.beasts.concat(action.payload.beast),
            },
          );
        }
        return factionBeasts;
      }),
    });
  }
  if (EDIT_BEAST === action.type) {
    const {
      id, type, name, desc, move, damage, maxdmg,
      leap, maxleap, hp, maxhp, speed, maxspeed,
    } = action.payload.beast;
    console.log('[REDUX] Edit augment: ', action.payload);
    return Object.assign({}, state, {
      beasts: state.beasts.map((factionBeasts) => {
        if (factionBeasts.faction === action.payload.faction) {
          return Object.assign(
            {},
            { faction: factionBeasts.faction },
            {
              beasts: factionBeasts.beasts.map((beast) => {
                if (beast.id === id) {
                  return Object.assign({}, beast, {
                    id,
                    type,
                    name,
                    desc,
                    move,
                    damage,
                    maxdmg,
                    leap,
                    maxleap,
                    hp,
                    maxhp,
                    speed,
                    maxspeed,
                  });
                }
                return beast;
              }),
            },
          );
        }
        return factionBeasts;
      }),
    });
  }
  console.log('[REDUX] Uncaught Action: ', action);
  return state;
};

export default rootReducer;
