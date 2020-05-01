import React from 'react';

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
    return(
      <div className='files-display-container'>
        <p>this is the files display</p>
      </div>
    )
  }
}

export default FilesDisplay;