/* eslint-disable no-console */
import {
  PROCESS_USER_AUTHENTICATION,
  IS_AUTHENTICATING,
  PROCESS_USER,
  IS_LOADING,
  PROCESS_ALL_USERS, UPDATE_ALL_USERS,
  CREATE_FACTION, PROCESS_EDIT_FACTION, PROCESS_DOWNLOAD_FACTIONS,
  CREATE_AUGMENT, PROCESS_EDIT_AUGMENT, PROCESS_DOWNLOAD_AUGMENTS, PROCESS_DELETE_AUGMENT,
  CREATE_BEAST, PROCESS_EDIT_BEAST, PROCESS_DOWNLOAD_BEASTS, PROCESS_DELETE_BEAST,
  CREATE_RIFT, EDIT_RIFT, PROCESS_DOWNLOAD_RIFT,
  CREATE_OVERVIEW, EDIT_OVERVIEW, PROCESS_DOWNLOAD_OVERVIEW,
  CREATE_GAMERULE, EDIT_GAMERULE, PROCESS_DOWNLOAD_GAMERULE,
  CREATE_BLOCK,
  IS_STALE,
  EDIT_BLOCK,
} from '../constants/action-types';

import factions from '../constants/faction-data';
import beasts from '../constants/beast-data';
import augments from '../constants/augment-data';
import overview from '../constants/overview-data';
import rift from '../constants/rift-data';
import gamerules from '../constants/game-rule-data';
import blocks from '../constants/block-data';
// import users from '../constants/user-data';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  isLoading: false,
  isDownload: {
    factionData: localStorage.getItem('factionsRecheck') || 0,
    beastData: localStorage.getItem('beastsRecheck') || 0,
    augmentData: localStorage.getItem('augmentsRecheck') || 0,
    overviewData: localStorage.getItem('overviewsRecheck') || 0,
    riftData: localStorage.getItem('riftsRecheck') || 0,
    gameRuleData: localStorage.getItem('gameRulesRecheck') || 0,
    blockData: localStorage.getItem('blockRecheck') || 0,
  },
  user: JSON.parse(localStorage.getItem('user')),
  unConfirmedUser: JSON.parse(localStorage.getItem('unConfirmedUser')),
  factions: JSON.parse(localStorage.getItem('factionsData')) || factions,
  beasts: JSON.parse(localStorage.getItem('beastsData')) || beasts,
  augments: JSON.parse(localStorage.getItem('augmentsData')) || augments,
  blocks: JSON.parse(localStorage.getItem('blocksData')) || blocks,
  overview,
  rift,
  gamerules: JSON.parse(localStorage.getItem('gameRulesData')) || gamerules,
  users: undefined,
};

const rootReducer = (state = initialState, action) => {
  if (IS_STALE === action.type) {
    console.log('[REDUX] Update Stale time: ', action.payload);
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

  if (PROCESS_ALL_USERS === action.type) {
    console.log('[REDUX] get ALL User: ', action.payload);
    return Object.assign({}, state, {
      users: action.payload,
    });
  }

  if (UPDATE_ALL_USERS === action.type) {
    console.log('[REDUX] Update ALL User: ', action.payload);
    const mergeUser = (oldUsers, newUser) => oldUsers.map((user) => {
      if (user.userID === newUser.userID) { return newUser; } return user;
    });

    return Object.assign({}, state, {
      users: mergeUser(state.users, action.payload),
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
  if (PROCESS_EDIT_FACTION === action.type) {
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
  if (PROCESS_DOWNLOAD_AUGMENTS === action.type) {
    console.log('[REDUX] Download Augments: ', action.payload);
    return Object.assign({}, state, {
      augments: action.payload,
    });
  }
  if (CREATE_AUGMENT === action.type) {
    console.log('[REDUX] Create augment: ', action.payload);
    return Object.assign({}, state, {
      augments: state.augments.map((factionAugments) => {
        if (factionAugments.faction === action.payload.faction) {
          return Object.assign(
            {},
            { faction: factionAugments.faction },
            { logo: factionAugments.logo },
            {
              augments: factionAugments.augments.concat(action.payload.augment),
            },
          );
        }
        return factionAugments;
      }),
    });
  }
  if (PROCESS_EDIT_AUGMENT === action.type) {
    console.log('[REDUX] Edit augment: ', action.payload);
    return Object.assign({}, state, {
      augments: state.augments.map((factionAugments) => {
        if (factionAugments.faction === action.payload.faction) {
          return Object.assign(
            {},
            { faction: factionAugments.faction },
            {
              augments: factionAugments.augments.map((augment) => {
                if (augment.id === action.payload.augment.id) {
                  return Object.assign({}, augment, action.payload.augment);
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
  if (PROCESS_DELETE_AUGMENT === action.type) {
    console.log('[REDUX] Delete Augment: ', action.payload);
    return Object.assign({}, state, {
      augments: state.augments.map((factionAugments) => {
        if (factionAugments.faction === action.payload.factionName) {
          return Object.assign(
            {},
            { faction: factionAugments.faction },
            {
              augments: factionAugments.augments.filter(augment => (augment.id !== action.payload.id)),
            },
          );
        }
        return factionAugments;
      }),
    });
  }

  // beasts
  if (PROCESS_DOWNLOAD_BEASTS === action.type) {
    console.log('[REDUX] Download beast: ', action.payload);
    return Object.assign({}, state, {
      beasts: action.payload,
    });
  }
  if (CREATE_BEAST === action.type) {
    console.log('[REDUX] Create beast: ', action.payload);
    return Object.assign({}, state, {
      beasts: state.beasts.map((factionBeasts) => {
        if (factionBeasts.faction === action.payload.faction) {
          return Object.assign(
            {},
            { faction: factionBeasts.faction },
            { logo: factionBeasts.logo },
            {
              beasts: factionBeasts.beasts.concat(action.payload.beast),
            },
          );
        }
        return factionBeasts;
      }),
    });
  }
  if (PROCESS_EDIT_BEAST === action.type) {
    console.log('[REDUX] Edit Beast: ', action.payload);
    return Object.assign({}, state, {
      beasts: state.beasts.map((factionBeasts) => {
        if (factionBeasts.faction === action.payload.faction) {
          return Object.assign(
            {},
            { faction: factionBeasts.faction },
            {
              beasts: factionBeasts.beasts.map((beast) => {
                if (beast.id === action.payload.beast.id) {
                  return Object.assign({}, beast, action.payload.beast);
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
  if (PROCESS_DELETE_BEAST === action.type) {
    console.log('[REDUX] Delete Beast: ', action.payload);
    return Object.assign({}, state, {
      beasts: state.beasts.map((factionBeasts) => {
        if (factionBeasts.faction === action.payload.factionName) {
          return Object.assign(
            {},
            { faction: factionBeasts.faction },
            {
              beasts: factionBeasts.beasts.filter(beast => (beast.id !== action.payload.id)),
            },
          );
        }
        return factionBeasts;
      }),
    });
  }

  // blocks
  if (CREATE_BLOCK === action.type) {
    console.log('[REDUX] Create Block: ', action.payload);
    return Object.assign({}, state, {
      blocks: state.blocks.concat(action.payload),
    });
  }
  if (EDIT_BLOCK === action.type) {
    const {
      name, latitude, longitude,
    } = action.payload;
    console.log('[REDUX] Edit Block: ', action.payload);
    return Object.assign({}, state, {
      blocks: state.blocks.map((block) => {
        if (block.id === action.payload.id) {
          return Object.assign({}, block, {
            name,
            latitude,
            longitude,
          });
        }
        return block;
      }),
    });
  }

  // Rift
  if (PROCESS_DOWNLOAD_RIFT === action.type) {
    const item = action.payload.pop();
    console.log('[REDUX] Download Rift: ', item);
    return Object.assign({}, state, {
      rift: item,
    });
  }
  if (CREATE_RIFT === action.type) {
    console.log('[REDUX] Create Rift: ', action.payload);
    return Object.assign({}, state);
    // return Object.assign({}, state, {
    //   factions: state.factions.concat(action.payload),
    //   beasts: state.beasts.concat({
    //     faction: action.payload.name,
    //     beasts: [],
    //   }),
    //   augments: state.augments.concat({
    //     faction: action.payload.name,
    //     beasts: [],
    //   }),
    // });
  }
  if (EDIT_RIFT === action.type) {
    // const {
    //   name, leader, faculty, desc,
    // } = action.payload;
    console.log('[REDUX] Edit Rift: ', action.payload);
    return Object.assign({}, state);
    // return Object.assign({}, state, {
    //   factions: state.factions.map((faction) => {
    //     if (faction.id === action.payload.id) {
    //       return Object.assign({}, faction, {
    //         name,
    //         leader,
    //         faculty,
    //         desc,
    //       });
    //     }
    //     return faction;
    //   }),
    // });
  }

  // Overview
  if (PROCESS_DOWNLOAD_OVERVIEW === action.type) {
    const item = action.payload.pop();
    console.log('[REDUX] Download Overview: ', item);
    return Object.assign({}, state, {
      overview: item,
    });
  }
  if (CREATE_OVERVIEW === action.type) {
    console.log('[REDUX] Create Overview: ', action.payload);
    return Object.assign({}, state);
    // return Object.assign({}, state, {
    //   factions: state.factions.concat(action.payload),
    //   beasts: state.beasts.concat({
    //     faction: action.payload.name,
    //     beasts: [],
    //   }),
    //   augments: state.augments.concat({
    //     faction: action.payload.name,
    //     beasts: [],
    //   }),
    // });
  }
  if (EDIT_OVERVIEW === action.type) {
    // const {
    //   name, leader, faculty, desc,
    // } = action.payload;
    console.log('[REDUX] Edit Overview: ', action.payload);
    return Object.assign({}, state);
    // return Object.assign({}, state, {
    //   factions: state.factions.map((faction) => {
    //     if (faction.id === action.payload.id) {
    //       return Object.assign({}, faction, {
    //         name,
    //         leader,
    //         faculty,
    //         desc,
    //       });
    //     }
    //     return faction;
    //   }),
    // });
  }

  // Game Rules
  if (PROCESS_DOWNLOAD_GAMERULE === action.type) {
    console.log('[REDUX] Download Gamerule: ', action.payload);
    return Object.assign({}, state, {
      gamerules: action.payload,
    });
  }
  if (CREATE_GAMERULE === action.type) {
    console.log('[REDUX] Create Gamerule: ', action.payload);
    return Object.assign({}, state);
    // return Object.assign({}, state, {
    //   factions: state.factions.concat(action.payload),
    //   beasts: state.beasts.concat({
    //     faction: action.payload.name,
    //     beasts: [],
    //   }),
    //   augments: state.augments.concat({
    //     faction: action.payload.name,
    //     beasts: [],
    //   }),
    // });
  }
  if (EDIT_GAMERULE === action.type) {
    // const {
    //   name, leader, faculty, desc,
    // } = action.payload;
    console.log('[REDUX] Edit Gamerule: ', action.payload);
    return Object.assign({}, state);
    // return Object.assign({}, state, {
    //   factions: state.factions.map((faction) => {
    //     if (faction.id === action.payload.id) {
    //       return Object.assign({}, faction, {
    //         name,
    //         leader,
    //         faculty,
    //         desc,
    //       });
    //     }
    //     return faction;
    //   }),
    // });
  }

  console.log('[REDUX] Uncaught Action: ', action);
  return state;
};

export default rootReducer;
