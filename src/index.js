import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
//Strict mode makes it easier to write "secure" JavaScript. 
//Strict mode changes previously accepted "bad syntax" into real errors.
// As an example, in normal JavaScript, mistyping a variable name creates a new global variable.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);