import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let pls = {};
  if(window.currentUser){
    pls = {
      entities : {
        users : {

        }
      },
      session : {
        currentUser : window.currentUser
      },
      errors : {
        sessionErrors: []
      }
    }
  }

  const root = document.getElementById('root');
  store = configureStore(pls);
  ReactDOM.render(<Root store={store}/>, root);
  window.state = store.getState;
})