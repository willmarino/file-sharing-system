import React from 'react';

// A header button will need a message to display,
// A fuction to execute on click
// a dropdown child component if one is necessary
class HeaderButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li tabIndex='0' className='ud-header-action'>
        <p>{this.props.message}</p>
      </li>
    )
  }
}

export default HeaderButton;