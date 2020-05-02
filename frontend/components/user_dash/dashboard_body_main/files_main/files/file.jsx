import React from 'react';

class File extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li>
        <p>{this.props.file.name}</p>
      </li>
    )
  }
}

export default File;