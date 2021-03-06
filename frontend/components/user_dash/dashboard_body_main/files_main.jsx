import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import FileUploadFormContainer from '../../forms/file_upload_form_container';
import FilesDisplayContainer from './files_main/files_display_container';

class FilesMain extends React.Component{
  constructor(props){
    super(props);

    this.handleNav = this.handleNav.bind(this);
  }

  handleNav(url){
    return e => {
      this.props.history.push(url);
    }
  }

  // the appear prop is necessary when I want a csstransition to run on initial rendering of a component
  render(){
    let displayButtonClasses = "db-body-subheader";
    let addButtonClasses = "db-body-subheader";
    if(this.props.location.pathname === '/'){
      displayButtonClasses += " db-body-subheader-focused";
    }else if(this.props.location.pathname === '/add'){
      addButtonClasses += " db-body-subheader-focused";
    };

    return(
      <CSSTransition classNames='simple-transition' timeout={750} in={this.props.shouldTransition} appear={true}>
        <div className='db-body-main'>
          <div className='db-body-header'>
            <div className={displayButtonClasses} onClick={this.handleNav('/')}>
              <p>Display</p>
            </div>
            <div className={addButtonClasses} id='files-add-header' onClick={this.handleNav('/add')}>
              <p>Add</p>
            </div>
          </div>
          <div className='db-body-body'>
            <Route exact path='/' component={FilesDisplayContainer}/>
            <Route exact path='/add' component={FileUploadFormContainer}/>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default FilesMain;