import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css'
import App from './App';
import {ContextProvider} from './Context'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

