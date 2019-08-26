import {
  USER_AUTHENTICATION,
  IS_AUTHENTICATING,
  SET_USER,
  GET_USER,
  IS_LOADING,
  DOWNLOAD_FACTIONS,
  CREATE_FACTION,
  EDIT_FACTION,
  DOWNLOAD_BEASTS,
  CREATE_BEAST,
  EDIT_BEAST,
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
