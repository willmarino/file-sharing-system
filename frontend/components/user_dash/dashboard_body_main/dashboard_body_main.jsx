import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilesMain from './files_main';
import ConnectMain from './connect_main';
// import FilesMainContainer from './files_main_container';
// import ConnectMainContainer from './connect_main_container';

import { CSSTransition } from 'react-transition-group';

class DashboardBodyMain extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      shouldChildTransition: false
    }
  }

  componentDidUpdate(prevProps, prevState){
    debugger;
    if(prevProps.location.pathname !== this.props.location.pathname){
      debugger;
      this.setState({ shouldChildTransition: true });
    }else if(this.state.shouldChildTransition && prevState.shouldChildTransition){
      debugger;
      this.setState({ shouldChildTransition: false });
    }
  }

  render(){
    debugger;
    return(
      <CSSTransition classNames='reverse-transition' in={this.props.mounted} timeout={750}>
        <Switch>
          <Route exact path='/' render={() => (<FilesMain shouldTransition={this.state.shouldChildTransition}/>)}/>
          <Route exact path='/connect' render={() => (<ConnectMain shouldTransition={this.state.shouldChildTransition}/>)}/>
        </Switch>
      </CSSTransition>
    )
  }
}

export default DashboardBodyMain;