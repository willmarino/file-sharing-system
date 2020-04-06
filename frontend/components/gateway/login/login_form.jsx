import React from 'react';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      credentials : {
        email : '',
        password : ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToRegister = this.navigateToRegister.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // this.validate();

  }

  validate(){

  }

  navigateToRegister(){
    this.props.history.push('/gateway/register');
  }

  render(){
    return(
      <div className='gateway-form-container'>
        <h1>Login!</h1>
        <p onClick={this.navigateToRegister} >Go To Register Page</p>
        <form onSubmit={this.handleSubmit}>
          <div className='credentials-form-row'>
            <p>email</p>
            <input type='text'/>
          </div>
          <div className='credentials-form-row'>
            <p>password</p>
            <input type='text'/>
          </div>
          <div className='credentials-submit-row'>
            <input type='submit' value='login'/>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm;