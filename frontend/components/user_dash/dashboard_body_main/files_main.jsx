import React from 'react';
import { CSSTransition } from 'react-transition-group';

class FilesMain extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <CSSTransition classNames='simple-transition' timeout={500} in={this.props.shouldTransition}>
        <div className='db-body-main'>
          <div className='db-body-header'>
            <p>Files</p>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default FilesMain;