import {
  USER_AUTHENTICATION,
  IS_AUTHENTICATING,
  SET_USER,
  GET_USER,
  IS_LOADING,
} from '../constants/action-types';

export const userHasAuthenticated = payload => ({ type: USER_AUTHENTICATION, payload });
export const isAuthenticating = payload => ({ type: IS_AUTHENTICATING, payload });
export const setUser = payload => ({ type: SET_USER, payload });
export const getUser = payload => ({ type: GET_USER, payload });
export const isLoading = payload => ({ type: IS_LOADING, payload });
