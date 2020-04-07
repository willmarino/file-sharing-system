import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let pls = {};
  if(window.currentUser){
    let curUser = window.currentUser.user
    pls = {
      entities : {
        users : {
          [curUser.id] : curUser
        }
      },
      session : {
        currentUser : curUser.id
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