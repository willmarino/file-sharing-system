import React from 'react';
import { CSSTransition } from 'react-transition-group';
import FileUploadFormContainer from '../../forms/file_upload_form_container';

class FilesMain extends React.Component{
  constructor(props){
    super(props);
  }

  // the appear prop is necessary when I want a csstransition to run on initial rendering of a component
  render(){
    return(
      <CSSTransition classNames='simple-transition' timeout={750} in={this.props.shouldTransition} appear={true}>
        <div className='db-body-main'>
          <div className='db-body-header'>
            <p>Files</p>
            <FileUploadFormContainer/>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default FilesMain;