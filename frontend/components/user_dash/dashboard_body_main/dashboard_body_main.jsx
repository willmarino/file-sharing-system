import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilesMainContainer from './files_main_container';
import ConnectMainContainer from './connect_main_container';

import { CSSTransition } from 'react-transition-group';

class DashboardBodyMain extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      canTransition: false
    }
    this.filesMainUrls = [
      '/',
      '/add',
      '/display'
    ]
    this.connectMainUrls = [
      '/connect'
    ]
    this.checkUrls = this.checkUrls.bind(this);
    this.prevUrl = null;
    this.curUrl = null;

  }

  checkUrls(prevUrl, curUrl){
    if(this.filesMainUrls.includes(prevUrl) && !this.filesMainUrls.includes(curUrl)){
      return true;
    }else if(!this.filesMainUrls.includes(prevUrl) && this.filesMainUrls.includes(curUrl)){
      return true;
    }else{
      return false;
    }
  }

  componentDidUpdate(prevProps){
    debugger;
    this.prevUrl = prevProps.location.pathname;
    this.curUrl = this.props.location.pathname;
    if(prevProps.mounted && !this.state.canTransition){
      this.setState({canTransition : true});
    }
  }

  render(){
    debugger;
    let { location } = this.props;
    let shouldTransition = this.checkUrls(this.prevUrl, this.curUrl);
    return(
      <CSSTransition classNames='reverse-transition' in={this.props.mounted} timeout={750}>
        <Switch>
          <Route
            exact path='/connect'
            render={() => (
              <ConnectMainContainer
                inProp={this.state.canTransition && this.connectMainUrls.includes(location.pathname) && shouldTransition}/>
            )}/>
          <Route
            path='/'
            render={() => (
              <FilesMainContainer
                inProp={this.state.canTransition && this.filesMainUrls.includes(location.pathname) && shouldTransition}/>
            )}/>
        </Switch>
      </CSSTransition>
    )
  }
}

export default DashboardBodyMain;