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
        confirmPassword: '',
        email: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.navigateToLogin = this.navigateToLogin.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // this.validate();
    this.props.signupUser(this.state.credentials);
  }

  validate(){

  }

  navigateToLogin(){
    this.props.history.push('/gateway');
  }

  update(field){
    return (e) => {
      let credentials = this.state.credentials;
      credentials[field] = e.currentTarget.value;
      this.setState({ credentials });
    }
  }

  render(){
    return(
      <div className='gateway-form-container'>
        <h1>Register!</h1>
        <p onClick={this.navigateToLogin} >Go To Login Page</p>
        <form onSubmit={this.handleSubmit}>
          <div className='credentials-form-row'>
            <p>Email</p>
            <input type='text' value={this.state.credentials.email} onChange={this.update('email')}/>
          </div>
          <div className='credentials-form-row'>
            <p>Username</p>
            <input type='text' value={this.state.credentials.username} onChange={this.update('username')}/>
          </div>
          <div className='credentials-form-row'>
            <p>Password</p>
            <input type='text' value={this.state.credentials.password} onChange={this.update('password')}/>
          </div>
          <div className='credentials-form-row'>
            <p>Confirm Password</p>
            <input type='text' value={this.state.credentials.confirm_password} onChange={this.update('confirmPassword')}/>
          </div>
          <div className='credentials-submit-row'>
            <input type='submit' value='register'/>
          </div>
        </form>
        <p>{this.state.errors}</p>
      </div>
    )
  }
}

export default RegisterForm;