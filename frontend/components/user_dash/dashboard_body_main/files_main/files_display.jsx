import React from 'react';
import FileContainer from './files/file_container';

class FilesDisplay extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchFiles();
  }
  render(){
    if(!this.props.files.fetched){
      return <p>loading</p>;
    }
    debugger;
    return(
      <ul className='files-display-container'>
        {this.props.files.map((file) => <FileContainer file={file}/>)}
      </ul>
    )
  }
}

export default FilesDisplay;