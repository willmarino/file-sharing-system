import React from 'react';

class RegisterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message : 'before',
      errors : [],
      credentials: {
        username: '',
        password: '',
        confirm_password: '',
        email: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.navigateToLogin = this.navigateToLogin.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.validate();
    this.setState({ message : 'after' });
  }

  validate(){

  }

  navigateToLogin(){
    this.props.history.push('/gateway');
  }

  render(){
    return(
      <div className='gateway-form-container'>
        <p onClick={this.navigateToLogin} >Login Page</p>
        <form onSubmit={this.handleSubmit}>
          <div className='credentials-form-row'>
            <p>Email</p>
            <input type='text' value={this.state.credentials.email}/>
          </div>
          <div className='credentials-form-row'>
            <p>Username</p>
            <input type='text' value={this.state.credentials.username}/>
          </div>
          <div className='credentials-form-row'>
            <p>Password</p>
            <input type='text' value={this.state.credentials.password}/>
          </div>
          <div className='credentials-form-row'>
            <p>Confirm Password</p>
            <input type='text' value={this.state.credentials.confirm_password}/>
          </div>
          <div className='credentials-submit-row'>
            <input type='submit' value='submit'/>
          </div>
        </form>
        <p>{this.state.message}</p>
        <p>{this.state.errors}</p>
      </div>
    )
  }
}

export default RegisterForm;