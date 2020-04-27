import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let pls = {
    entities : {
      users: {

      },
      friendRequests: {
        received: {

        },
        sent: {

        }
      }
    },
    session: {
      currentUser : null
    },
    errors: {
      sessionErrors: []
    }
  };
  if(window.currentUser){
    let curUser = window.currentUser.user
    pls.session.currentUser = curUser.id;
    pls.entities.users = { [curUser.id] : curUser };
  }

  const root = document.getElementById('root');
  store = configureStore(pls);
  ReactDOM.render(<Root store={store}/>, root);
  window.state = store.getState;
})