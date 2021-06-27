import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className = {classes.body}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

