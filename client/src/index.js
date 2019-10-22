import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Amplify from 'aws-amplify';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store/index';

require('dotenv').config();

const {
  REACT_APP_REGION,
  REACT_APP_URL,
  REACT_APP_USER_POOL_ID,
  REACT_APP_APP_CLIENT_ID,
  REACT_APP_IDENTITY_POOL_ID,
} = process.env;

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: REACT_APP_REGION,
    userPoolId: REACT_APP_USER_POOL_ID,
    identityPoolId: REACT_APP_IDENTITY_POOL_ID,
    userPoolWebClientId: REACT_APP_APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: 'AWS-HMG-URL',
        endpoint: REACT_APP_URL,
        region: REACT_APP_REGION,
      },
    ],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
