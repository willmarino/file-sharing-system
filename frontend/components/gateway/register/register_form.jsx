import React from 'react';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message : 'before',
      errors : [],
      credentials: {
        username: '',
        password: '',
        email: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.validate();
    this.setState({ message : 'after' });
  }

  validate(){

  }

  render(){
    return(
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='credentials-form-row'>
            <p>Email</p>
            <input type='text' value={this.state.credentials.username}/>
          </div>
          <div className='credentials-form-row'>
            <p>Username</p>
            <input type='text'/>
          </div>
          <div className='credentials-form-row'>
            <p>Password</p>
            <input type='hidden'/>
          </div>
          <div className='credentials-form-row'>
            <p>Confirm Password</p>
            <input type='hidden'/>
          </div>
          <div>
            <input type='submit' value='submit'/>
          </div>
        </form>
        <p>{this.state.message}</p>
        <p>{this.state.errors}</p>
      </div>
    )
  }
}

export default LoginForm;