// libraries imports
import React from 'react';
import ReactDOM from 'react-dom';

// local imports
import './index.css';
import App from './App';
import storage from './utils/storage.js';
import { configureClient } from './api/client.js';

const accessToken = storage.get('token');
configureClient(accessToken);

ReactDOM.render(
  <App isInitiallyLogged={!!accessToken} />,
  document.getElementById('root')
);
