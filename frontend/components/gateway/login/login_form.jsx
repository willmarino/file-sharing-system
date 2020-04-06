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
      errors.push(<li key='error1'><p> Not a valid password</p></li>);
    }
    if(!input.email.includes('@')){
      errors.push(<li key='error2'><p>Email must be valid</p></li>);
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
        <p className='gateway-form-header'>Login!</p>
        <form onSubmit={this.handleSubmit}>
          <div className='credentials-form-row'>
            <p className='credentials-form-row-header'>E-mail</p>
            <input className='gateway-form-input' type='text' value={this.state.credentials.email} onChange={this.update('email')}/>
          </div>
          <div className='credentials-form-row'>
            <p className='credentials-form-row-header'>Password</p>
            <input className='gateway-form-input' type='password' value={this.state.credentials.password} onChange={this.update('password')}/>
          </div>
          <div className='credentials-submit-row'>
            <input type='submit' value='Login'/>
          </div>
        </form>
        <p className='gateway-form-navigator' onClick={this.navigateToRegister} >Go To Register Page</p>
        <ul>{this.state.errors}</ul>
      </div>
    )
  }
}

export default LoginForm;