import {
  USER_AUTHENTICATION,
} from '../constants/action-types';

// eslint-disable-next-line import/prefer-default-export
export const userHasAuthenticated = payload => ({ type: USER_AUTHENTICATION, payload });
