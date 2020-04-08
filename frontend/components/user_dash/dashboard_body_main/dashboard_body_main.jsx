import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilesMain from './files_main';
import ConnectMain from './connect_main';
import { CSSTransition } from 'react-transition-group';

const DashboardBodyMain = (props) => {
    return(
      <CSSTransition classNames='reverse-transition' in={props.mounted} timeout={750}>
        <Switch>
          <Route exact path='/' component={FilesMain}/>
          <Route exact path='/connect' component={ConnectMain}/>
        </Switch>
      </CSSTransition>
    )
}

export default DashboardBodyMain;