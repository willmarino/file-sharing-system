import React from 'react';
import UserBlock from '../../user/user_block';
import { CSSTransition } from 'react-transition-group';

class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      lastClicked: null
    }

    this.classNames={
      focused: 'ud-header-action-focused',
      passive: 'ud-header-action'
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.navToFiles = this.navToFiles.bind(this);
    this.navToConnect = this.navToConnect.bind(this);
  }

  handleLogout(){
    this.props.logoutUser();
  }

  navToFiles(){
    return (e) => {
      this.setState({lastClicked: parseInt(e.currentTarget.dataset.idx)});
      this.props.history.push('/');
    }
  }

  navToConnect(){
    return (e) => {
      this.setState({lastClicked: parseInt(e.currentTarget.dataset.idx)});
      this.props.history.push('/connect');
    }
  }

  render(){
    let classes = [];
    for(let i = 0; i < 3; i++){
      if(i === this.state.lastClicked){
        classes.push('ud-header-action ud-header-action-focused');
      }else{
        classes.push('ud-header-action');
      }
    }
    let headerActions = (
      <ul className='ud-header-actions'>
        <li className={classes[0]} onClick={this.navToFiles()} key={0} data-idx={'0'}>
          <p>files</p>
        </li>
        <li className={classes[1]} onClick={this.navToConnect()} key={1} data-idx={'1'}>
          <p>connect</p>
        </li>
        <li className={classes[2]} onClick={this.handleLogout} key={2} data-idx={'2'}>
          <p>log out</p>
        </li>
      </ul>);
    return(
      <CSSTransition classNames='reverse-transition' in={this.props.mounted} timeout={750}>
        <div className='ud-header-container'>
          <UserBlock user={this.props.user}/>
          {headerActions}
        </div>
      </CSSTransition>
    )
  }
}

export default Header;