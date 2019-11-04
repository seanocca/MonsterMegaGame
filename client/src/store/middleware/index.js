import { Auth, API, Storage } from 'aws-amplify';
import {
  USER_AUTHENTICATION, PROCESS_USER_AUTHENTICATION,
  DOWNLOAD_FACTIONS, DOWNLOAD_BEASTS,
  GET_USER, SET_USER, PROCESS_USER, GET_ALL_USERS, PROCESS_ALL_USERS, UPDATE_ALL_USERS,
  IS_STALE, STALE_TIME,
  DOWNLOAD_RIFT, DOWNLOAD_OVERVIEW, DOWNLOAD_GAMERULE, DOWNLOAD_AUGMENTS,
  EDIT_BEAST, EDIT_AUGMENT, EDIT_FACTION,
  DELETE_BEAST, DELETE_AUGMENT, DELETE_FACTION,
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

const genericData = async (getState, dispatch, type) => {
  const currentTime = Math.round(Date.now() / 1000);
  const staleTime = getState().isDownload[`${type}Data`];
  const whenIsPublic = (getState().isAuthenticated) ? '' : 'public-';
  if (staleTime < currentTime) {
    dispatch({ type: IS_STALE, payload: { [`${type}Data`]: Infinity } });
    await API.get('AWS-HMG-URL', `/${whenIsPublic}list-${type}s`)
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

const factionExistAlready = (nextFaction, rebuildArray) => {
  for (let rebuildIndex = 0; rebuildIndex < rebuildArray.length; rebuildIndex += 1) {
    if (rebuildArray[rebuildIndex].faction === nextFaction) return rebuildIndex;
  }
  return -1;
};

const complexData = async (getState, dispatch, type) => {
  const currentTime = Math.round(Date.now() / 1000);
  const staleTime = getState().isDownload[`${type}Data`];
  const whenIsPublic = (getState().isAuthenticated) ? '' : 'public-';

  if (staleTime < currentTime) {
    dispatch({ type: IS_STALE, payload: { [`${type}Data`]: Infinity } });
    await API.get('AWS-HMG-URL', `/${whenIsPublic}list-${type}s`)
      .then((response) => {
        const buildData = [];
        let existingFaction = -1;
        response.forEach(((item) => {
          const { factionName, logo, ...lineItem } = item;
          existingFaction = factionExistAlready(factionName, buildData);
          if (existingFaction !== -1) {
            // Just add to the existing array
            buildData[existingFaction][`${type}s`].push({ ...lineItem });
          } else {
            // Add a new elelment
            buildData.push({ faction: factionName, logo, [`${type}s`]: [{ ...lineItem }] });
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
    if (!getState().isAuthenticating) genericData(getState, dispatch, action.type);
    return true;
  }
  if (DOWNLOAD_RIFT === action.type) {
    if (!getState().isAuthenticating) genericData(getState, dispatch, action.type);
    return true;
  }
  if (DOWNLOAD_OVERVIEW === action.type) {
    if (!getState().isAuthenticating) genericData(getState, dispatch, action.type);
    return true;
  }
  if (DOWNLOAD_BEASTS === action.type) {
    if (!getState().isAuthenticating) complexData(getState, dispatch, action.type);
    return true;
  }
  if (DOWNLOAD_AUGMENTS === action.type) {
    if (!getState().isAuthenticating) complexData(getState, dispatch, action.type);
    return true;
  }
  if (DOWNLOAD_GAMERULE === action.type) {
    if (!getState().isAuthenticating) genericData(getState, dispatch, action.type);
    return true;
  }
  return next(action);
};

const updateLocalStorageFaction = (type, saveObj) => {
  const { name } = saveObj;
  const existLS = JSON.parse(localStorage.getItem(`${type}sData`));
  console.log('existLS, saveObj', existLS, saveObj);
  window.saveObj = saveObj;
  const newLS = existLS.map((group) => {
    if (group.name === name) {
      return { ...saveObj };
    }
    return group; // do nothing
  });
  localStorage.setItem(`${type}sData`, JSON.stringify(newLS));
};

const updateLocalStorage = (type, saveObj) => {
  const { factionName, ...obj } = saveObj;
  const existLS = JSON.parse(localStorage.getItem(`${type}sData`));
  const newLS = existLS.map((group) => {
    if (group.faction === factionName) {
      return {
        faction: factionName,
        [`${type}s`]: group[`${type}s`].map((detail) => {
          if (detail.id === obj.id) {
            return obj;
          }
          return detail; // do nothing
        }),
      };
    }
    return group; // do nothing
  });
  localStorage.setItem(`${type}sData`, JSON.stringify(newLS));
};

const genericEdit = async (dispatch, endpoint, { type, payload }) => {
  const saveObj = {
    factionName: payload.faction,
    logo: payload.logo,
    ...payload[endpoint],
  };

  if (saveObj.newImage) {
    const { REACT_APP_BUCKET, REACT_APP_REGION } = process.env;
    const { newImage } = saveObj;
    const filename = `${endpoint}/${newImage.name}`;
    await Storage.put(filename, newImage, { contentType: newImage.type })
      .then(({ key }) => {
        saveObj.image = `https://${REACT_APP_BUCKET}.s3-${REACT_APP_REGION}.amazonaws.com/public/${key}`;
      }).catch(e => console.log(e));
  }

  await API.post('AWS-HMG-URL', `/${endpoint}`, { body: saveObj })
    .then((response) => {
      updateLocalStorage(endpoint, saveObj);
      dispatch({ type: `PROCESS_${type}`, payload, isLoading: false });
    })
    .catch(e => console.log(e));
};

export const processEdits = ({ getState, dispatch }) => next => async (action) => {
  if (EDIT_BEAST === action.type) {
    if (!getState().isAuthenticating) await genericEdit(dispatch, 'beast', action);
    return true;
  }

  if (EDIT_AUGMENT === action.type) {
    if (!getState().isAuthenticating) await genericEdit(dispatch, 'augment', action);
    return true;
  }

  if (EDIT_FACTION === action.type) {
    const { payload } = action;
    await API.post('AWS-HMG-URL', '/faction', { body: payload })
      .then((response) => {
        updateLocalStorageFaction('faction', action.payload);
        dispatch({ type: 'PROCESS_EDIT_FACTION', payload, isLoading: false });
      })
      .catch(e => console.log(e));
    // if (!getState().isAuthenticating) await genericEdit(dispatch, 'augment', action);
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

      // Here to save user data while confirming account
      if (userData.unConfirmed) {
        userData = Object.assign({}, userData, { password: '', confirm: '', unConfirmed: false });
        localStorage.setItem('user', JSON.stringify(userData));
      }

      return Auth.currentSession()
        .then((data) => {
          userData = Object.assign({}, userData, { password: '', confirm: '', unConfirmed: false });
          API.post('AWS-HMG-URL', '/user', { body: userData })
            .then((res) => {
              if (!userData.update) {
                dispatch({ type: PROCESS_USER, payload: userData, isLoading: false });
              } else {
                dispatch({ type: UPDATE_ALL_USERS, payload: userData, isLoading: false });
              }
            }).catch(({ response }) => {
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

  if (GET_ALL_USERS === action.type) {
    // download the data
    return API.get('AWS-HMG-URL', '/users')
      .then((response) => {
        dispatch({ type: PROCESS_ALL_USERS, payload: response });
      }).catch(({ response }) => {
        console.log(`Error(${response.status}): ${response.data.message}`);
      });
  }

  return next(action);
};

const deleteGeneral = (dispatch, { type, payload }) => {
  console.log('type, id', type, payload);
  const { faction, id } = payload;
  let modType = type;

  if (type === DELETE_AUGMENT) modType = type.slice(0, -1); // hack

  localStorage.removeItem(`${modType}sData`);
  localStorage.removeItem(`${modType}sRecheck`);

  API.post('AWS-HMG-URL', `/${type}`, { body: { factionName: faction, id } })
    .then(response => dispatch({ type: `PROCESS_${type}`, payload: { factionName: faction, id } }))
    .catch(({ response }) => {
      console.log(`Error(${response.status}): ${response.data.message}`);
    });
};

export const deleteItems = ({ getState, dispatch }) => next => async (action) => {
  if (DELETE_BEAST === action.type) {
    if (!getState().isAuthenticating) deleteGeneral(dispatch, action);
    return true;
  }

  if (DELETE_AUGMENT === action.type) {
    if (!getState().isAuthenticating) deleteGeneral(dispatch, action);
    return true;
  }

  if (DELETE_FACTION === action.type) {
    if (!getState().isAuthenticating) deleteGeneral(dispatch, action);
    return true;
  }

  return next(action);
};
