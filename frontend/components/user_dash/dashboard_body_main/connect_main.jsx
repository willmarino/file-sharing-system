import React from 'react';
import { CSSTransition } from 'react-transition-group';

class ConnectMain extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    debugger;
    return(
      <CSSTransition classNames='simple-transition' timeout={1000} in={this.props.shouldTransition} appear={true}>
        <div className='db-body-main'>
          <div className='db-body-header'>
            <p>Connect</p>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default ConnectMain;