import React from 'react';
import FileContainer from './files/file_container';

class FilesDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      transitionMap: null
    }
  }
  componentDidMount(){
    this.props.fetchFiles();
  }
  render(){
    if(!this.props.files.fetched){
      return <p>loading</p>;
    }
    return(
      <ul className='files-display-container'>
        {Object.keys(this.props.files).map((fileKey) => {
          if(fileKey !== 'fetched'){
            let file = this.props.files[fileKey];
            return <FileContainer file={file} key={file.name}/>;
          }
        })}
      </ul>
    )
  }
}

export default FilesDisplay;