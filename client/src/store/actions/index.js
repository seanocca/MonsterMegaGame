import {
  USER_AUTHENTICATION,
  IS_AUTHENTICATING,
  SET_USER,
  GET_USER,
  IS_LOADING,
  DOWNLOAD_FACTIONS, CREATE_FACTION, EDIT_FACTION,
  DOWNLOAD_BEASTS, CREATE_BEAST, EDIT_BEAST,
  DOWNLOAD_AUGMENTS, CREATE_AUGMENT, EDIT_AUGMENT,
  DOWNLOAD_RIFT, CREATE_RIFT, EDIT_RIFT,
  DOWNLOAD_OVERVIEW, CREATE_OVERVIEW, EDIT_OVERVIEW,
} from '../constants/action-types';

export const userHasAuthenticated = payload => ({ type: USER_AUTHENTICATION, payload });
export const isAuthenticating = payload => ({ type: IS_AUTHENTICATING, payload });
export const setUser = payload => ({ type: SET_USER, payload });
export const getUser = payload => ({ type: GET_USER, payload });
export const setIsLoading = payload => ({ type: IS_LOADING, payload });
// Factions
export const loadFactions = payload => ({ type: DOWNLOAD_FACTIONS, payload });
export const createFaction = payload => ({ type: CREATE_FACTION, payload });
export const editFaction = payload => ({ type: EDIT_FACTION, payload });
// Beasts
export const loadBeasts = payload => ({ type: DOWNLOAD_BEASTS, payload });
export const createBeast = payload => ({ type: CREATE_BEAST, payload });
export const editBeast = payload => ({ type: EDIT_BEAST, payload });
// Augments
export const loadAugments = payload => ({ type: DOWNLOAD_AUGMENTS, payload });
export const createAugment = payload => ({ type: CREATE_AUGMENT, payload });
export const editAugment = payload => ({ type: EDIT_AUGMENT, payload });
// Rift
export const loadRift = payload => ({ type: DOWNLOAD_RIFT, payload });
export const createRift = payload => ({ type: CREATE_RIFT, payload });
export const editRift = payload => ({ type: EDIT_RIFT, payload });
// Rift
export const loadOverview = payload => ({ type: DOWNLOAD_OVERVIEW, payload });
export const createOverview = payload => ({ type: CREATE_OVERVIEW, payload });
export const editOverview = payload => ({ type: EDIT_OVERVIEW, payload });
