import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { 
  processUserAuth, } from './middleware';

// Enables redux dev tools on middleware
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(
    thunk,
    processUserAuth,))
);

export default store;