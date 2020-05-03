import React from 'react';
import { CSSTransition } from 'react-transition-group';

class File extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <CSSTransition classNames='fade-in' in={true} timeout={5000} appear={true}>
        <li className='individual-file'>
          <p>{this.props.file.name}</p>
        </li>
      </CSSTransition>
    )
  }
}

export default File;