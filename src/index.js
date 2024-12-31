import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

// If you're using 'create-react-app', the file may import 'serviceWorkerRegistration.js'
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js';

// Render the main App component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Register the service worker to enable PWA features
serviceWorkerRegistration.register();  // Registers the service worker

