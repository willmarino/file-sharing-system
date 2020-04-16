import React from 'react';
import { CSSTransition } from 'react-transition-group';
import UserSearch from './user_search/user_search';

class ConnectMain extends React.Component{
  constructor(props){
    super(props);
  }

  // the appear prop is necessary when I want a csstransition to run on initial rendering of a component
  render(){
    return(
      <CSSTransition classNames='simple-transition' timeout={750} in={this.props.shouldTransition} appear={true}>
        <div className='db-body-main'>
          <div className='db-body-header'>
            <p>Connect</p>
          </div>
          <UserSearch/>
        </div>
      </CSSTransition>
    )
  }
}

export default ConnectMain;