import { Auth, API } from 'aws-amplify';
import {
  USER_AUTHENTICATION, PROCESS_USER_AUTHENTICATION,
  DOWNLOAD_FACTIONS, DOWNLOAD_BEASTS,
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

const factionData = async (getState, dispatch, type) => {
  const currentTime = Math.round(Date.now() / 1000);
  const staleTime = getState().isDownload[`${type}Data`];
  if (staleTime < currentTime) {
    dispatch({ type: IS_STALE, payload: { [`${type}Data`]: Infinity } });
    await API.get('AWS-HMG-URL', `/list-${type}s`)
      .then((response) => {
        dispatch({ type: `download_${type}`, payload: response });
        localStorage.setItem(`${type}sData`, JSON.stringify(response));
      })
      .catch(e => console.log(e))
      .finally((fin) => {
        localStorage.setItem(`${type}sRecheck`, currentTime + STALE_TIME);
        dispatch({ type: IS_STALE, payload: { [`${type}Data`]: currentTime + STALE_TIME } });
      });
  }
};

const existAlready = (nextFaction, rebuildArray) => {
  for (let rebuildIndex = 0; rebuildIndex < rebuildArray.length; rebuildIndex += 1) {
    if (rebuildArray[rebuildIndex].faction === nextFaction) return rebuildIndex;
  }
  return -1;
};

const beastData = async (getState, dispatch, type) => {
  const currentTime = Math.round(Date.now() / 1000);
  const staleTime = getState().isDownload[`${type}Data`];
  if (staleTime < currentTime) {
    dispatch({ type: IS_STALE, payload: { [`${type}Data`]: Infinity } });
    await API.get('AWS-HMG-URL', `/list-${type}s`)
      .then((response) => {
        const buildData = [];
        let existingFaction = -1;
        response.forEach(((item) => {
          const { factionName, ...beasts } = item;
          existingFaction = existAlready(factionName, buildData);
          if (existingFaction !== -1) {
            // Just add to the existing array
            buildData[existingFaction].beasts.push({ ...beasts });
          } else {
            // Add a new elelment
            buildData.push({ faction: factionName, beasts: [{ ...beasts }] });
          }
        }));
        dispatch({ type: `download_${type}`, payload: buildData });
        localStorage.setItem(`${type}sData`, JSON.stringify(buildData));
      })
      .catch(e => console.log(e))
      .finally((fin) => {
        localStorage.setItem(`${type}sRecheck`, currentTime + STALE_TIME);
        dispatch({ type: IS_STALE, payload: { [`${type}Data`]: currentTime + STALE_TIME } });
      });
  }
};

export const generalDataDownloads = ({ getState, dispatch }) => next => async (action) => {
  if (DOWNLOAD_FACTIONS === action.type) {
    factionData(getState, dispatch, action.type);
    return true;
  }
  if (DOWNLOAD_BEASTS === action.type) {
    beastData(getState, dispatch, action.type);
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
