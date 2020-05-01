import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilesMain from './files_main';
import ConnectMain from './connect_main';
import FilesMainContainer from './files_main_container';
import ConnectMainContainer from './connect_main_container';

import { CSSTransition } from 'react-transition-group';

class DashboardBodyMain extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      shouldTransition: false
    }
  }

  // I want to have a particular CSStransition occur not on the first render of the user dashboard (on refresh)
  // But I do want to have it occur on subsequent frontend routing events
  // So, if prevprops.mounted is true, then I know that the first render is behind me.
  // If I also know that this.state.shouldTransition is false, then I know that the transition that I want to take place has not yet taken place
  componentDidUpdate(prevProps){
    if(prevProps.mounted && !this.state.shouldTransition){
      this.setState({shouldTransition : true});
    }
  }

  render(){
    return(
      <CSSTransition classNames='reverse-transition' in={this.props.mounted} timeout={750}>
        <Switch>
          <Route exact path='/connect' render={() => (<ConnectMainContainer shouldTransition={this.state.shouldTransition && this.props.location.pathname === '/connect'}/>)}/>
          <Route path='/' render={() => (<FilesMainContainer shouldTransition={this.state.shouldTransition && this.props.location.pathname === '/'}/>)}/>
        </Switch>
      </CSSTransition>
    )
  }
}

export default DashboardBodyMain;