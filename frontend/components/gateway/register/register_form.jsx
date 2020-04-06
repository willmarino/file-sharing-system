import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
      },
      mounted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.navigateToLogin = this.navigateToLogin.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ errors: [] });
    this.validate();
  }

  validate(){
    let errors = [];
    let input = this.state.credentials;
    if(input.username.length < 6){
      errors.push(<li key='error1'><p>username must be longer than 5 characters</p></li>);
    }
    if(input.password.length < 6){
      errors.push(<li key='error2'><p>password must be longer than 5 characters</p></li>);
    }
    if(input.password === 'password'){
      errors.push(<li key='error3'><p>password cannot be password</p></li>);
    }
    if(!input.email.includes('@')){
      errors.push(<li key='error4'><p>email must be a valid email</p></li>);
    }
    if(input.password !== input.confirmPassword){
      errors.push(<li key='error5'><p>password confirmation field must match password</p></li>);
    }
    this.setState({ errors }, () => {
      if(this.state.errors.length === 0){
        this.props.signupUser(this.state.credentials);
      }
    });
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

  componentDidMount(){
    this.setState({mounted: true});
  }

  render(){
    return(
      <CSSTransition classNames='gateway-form-container-transition' in={this.state.mounted} timeout={500}>
        <div className='gateway-form-container' id='registration-form'>
          <p className='gateway-form-header'>Register!</p>
          <form onSubmit={this.handleSubmit}>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>E-mail</p>
              <input className='gateway-form-input' type='text' value={this.state.credentials.email} onChange={this.update('email')}/>
            </div>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>Username</p>
              <input className='gateway-form-input' type='text' value={this.state.credentials.username} onChange={this.update('username')}/>
            </div>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>Password</p>
              <input className='gateway-form-input' type='password' value={this.state.credentials.password} onChange={this.update('password')}/>
            </div>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>Confirm Password</p>
              <input className='gateway-form-input' type='password' value={this.state.credentials.confirm_password} onChange={this.update('confirmPassword')}/>
            </div>
            <div className='credentials-submit-row'>
              <input className='submit-button' type='submit' value='Register'/>
            </div>
          </form>
          <p className='gateway-form-navigator' onClick={this.navigateToLogin} >Login Page</p>
          <ul>{this.state.errors}</ul>
        </div>
      </CSSTransition>
    )
  }
}

export default RegisterForm;