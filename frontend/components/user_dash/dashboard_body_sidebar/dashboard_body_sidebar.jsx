import React from 'react';
import { CSSTransition } from 'react-transition-group';

const DashboardBodySidebar = (props) => {
  return(
    <CSSTransition classNames='reverse-transition' in={props.mounted} timeout={750}>
      <div className='db-body-sidebar'>
        <div className='db-body-header' id='center-header'>
          <p>Messaging</p>
        </div>
      </div>
    </CSSTransition>
  )
}

export default DashboardBodySidebar;