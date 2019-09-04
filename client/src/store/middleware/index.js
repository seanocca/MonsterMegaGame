import { Auth, API } from 'aws-amplify';
import {
  USER_AUTHENTICATION, PROCESS_USER_AUTHENTICATION,
  DOWNLOAD_FACTIONS, PROCESS_DOWNLOAD_FACTIONS,
  GET_USER, SET_USER, PROCESS_USER,
  IS_STALE, STALE_TIME,
} from '../constants/action-types';

export const processUserAuth = ({ getState, dispatch }) => next => async (action) => {
  if (USER_AUTHENTICATION === action.type) {
    if (action.payload === false) {
      localStorage.removeItem('user');
      await Auth.signOut();
    }
    return dispatch({ type: PROCESS_USER_AUTHENTICATION, payload: action.payload });
  }

  return next(action);
};

export const downloadFactions = ({ getState, dispatch }) => next => async (action) => {
  if (DOWNLOAD_FACTIONS === action.type) {
    const currentTime = Math.round(Date.now() / 1000);
    const staleTime = getState().isDownload.factionData;
    if (staleTime < currentTime) {
      dispatch({ type: IS_STALE, payload: { factionData: Infinity } });
      await API.get('AWS-HMG-URL', '/list-factions')
        .then((response) => {
          dispatch({ type: PROCESS_DOWNLOAD_FACTIONS, payload: response });
          window.localStorage.setItem('factionsData', JSON.stringify(response));
        })
        .catch(e => console.log(e))
        .finally((fin) => {
          localStorage.setItem('factionsRecheck', currentTime + STALE_TIME);
          dispatch({ type: IS_STALE, payload: { factionData: currentTime + STALE_TIME } });
        });
    }
    return true;
  }
  return next(action);
};

export const processUser = ({ getState, dispatch }) => next => async (action) => {
  if (SET_USER === action.type || GET_USER === action.type) {
    let userData = {};

    if (SET_USER === action.type) {
      // Upsert the data
      userData = action.payload;
      localStorage.setItem('user', JSON.stringify(userData));

      return Auth.currentSession()
        .then((data) => {
          userData = Object.assign({}, userData, { password: '', confirm: '' });
          API.post('AWS-HMG-URL', '/user', { body: userData })
            .then(res => dispatch({ type: PROCESS_USER, payload: userData, isLoading: false }))
            .catch(({ response }) => {
              console.log(`Error(${response.status}): ${response.data.message}`);
            });
        }).catch(e => dispatch({ type: PROCESS_USER, payload: userData, isLoading: false }));
    }

    if (GET_USER === action.type) {
      // download the data
      return API.get('AWS-HMG-URL', '/user')
        .then((response) => {
          localStorage.setItem('user', JSON.stringify(response));
          dispatch({ type: PROCESS_USER, payload: response, isLoading: false });
        }).catch(({ response }) => {
          console.log(`Error(${response.status}): ${response.data.message}`);
        });
    }
  }

  return next(action);
};
