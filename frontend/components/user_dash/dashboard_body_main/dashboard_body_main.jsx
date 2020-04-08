import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilesMain from './files_main';
import ConnectMain from './connect_main';

const DashboardBodyMain = () => {
  return(
    <Switch>
      <Route path='/' component={FilesMain}/>
      <Route exact path='/connect' component={ConnectMain}/>
    </Switch>
  )
}

export default DashboardBodyMain;