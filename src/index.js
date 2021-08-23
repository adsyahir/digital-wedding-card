import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const button   = document.querySelector('.submit-button');

const updateButtonMsg = function() {
  button.classList.add('state-1', 'animated');
  
  setTimeout(finalButtonMsg, 2000);
};

const finalButtonMsg = function() {
  button.classList.add('state-2');
  
  setTimeout(setInitialButtonState, 2000);
};

const setInitialButtonState = function() {
  button.classList.remove('state-1', 'state-2', 'animated');
};

button.addEventListener('click', updateButtonMsg);

const button1   = document.querySelector('.submit-button1');

const updateButtonMsg1 = function() {
  button1.classList.add('state-1', 'animated');
  
  setTimeout(finalButtonMsg1, 2000);
};

const finalButtonMsg1 = function() {
  button1.classList.add('state-2');
  
  setTimeout(setInitialButtonState1, 2000);
};

const setInitialButtonState1 = function() {
  button1.classList.remove('state-1', 'state-2', 'animated');
};

button1.addEventListener('click', updateButtonMsg1);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

