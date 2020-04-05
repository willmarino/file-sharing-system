import React from 'react';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message : 'before'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToRegister = this.navigateToRegister.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ message : 'after' });
  }

  navigateToRegister(){
    debugger;
    this.props.history.push('/gateway/register');
  }

  render(){
    return(
      <div className='gateway-form-container'>
        <p onClick={this.navigateToRegister} >Register Page</p>
        <form onSubmit={this.handleSubmit}>
          <div className='credentials-form-row'>
            <p>username</p>
            <input type='text'/>
          </div>
          <div className='credentials-form-row'>
            <p>password</p>
            <input type='text'/>
          </div>
          <div className='credentials-submit-row'>
            <input type='submit' value='submit'/>
          </div>
        </form>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default LoginForm;