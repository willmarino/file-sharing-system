import React from 'react';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      errors: [],
      credentials : {
        email : '',
        password : ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToRegister = this.navigateToRegister.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.validate();
  }

  validate(){
    let errors = [];
    let input = this.state.credentials;
    if(input.password.length < 6){
      errors.push(<p key='error1'>Not a valid password</p>);
    }
    if(!input.email.includes('@')){
      errors.push(<p key='error2'>Email must be valid</p>);
    }
    this.setState({ errors }, () => {
      if(this.state.errors.length === 0){
        this.props.loginUser(this.state.credentials);
      }
    });
  }

  navigateToRegister(){
    this.props.history.push('/gateway/register');
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
        <h1>Login!</h1>
        <p onClick={this.navigateToRegister} >Go To Register Page</p>
        <form onSubmit={this.handleSubmit}>
          <div className='credentials-form-row'>
            <p>email</p>
            <input type='text' value={this.state.credentials.email} onChange={this.update('email')}/>
          </div>
          <div className='credentials-form-row'>
            <p>password</p>
            <input type='password' value={this.state.credentials.password} onChange={this.update('password')}/>
          </div>
          <div className='credentials-submit-row'>
            <input type='submit' value='login'/>
          </div>
        </form>
        <div>{this.state.errors}</div>
      </div>
    )
  }
}

export default LoginForm;