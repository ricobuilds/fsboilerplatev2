import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './Context/reducer';
import { StateProvider } from './Context/StateProvider';
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);