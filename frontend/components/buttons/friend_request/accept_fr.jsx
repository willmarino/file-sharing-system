import React from 'react';
import { FaHandsHelping } from 'react-icons/fa';

class AcceptFR extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.props.respondToFriendRequest({resp : true, id : this.props.fr.id});
  }
  render(){
    return(
      <div onClick={this.handleClick} className='frb-container'>
        <FaHandsHelping/>
      </div>
    )
  }
}

export default AcceptFR;