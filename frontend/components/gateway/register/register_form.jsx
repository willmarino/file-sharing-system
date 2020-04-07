import React from 'react';
import { CSSTransition } from 'react-transition-group';
import createErrorsComponent from '../../errors/errors_component';

class RegisterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message : 'before',
      errors : {
        username: [],
        email: [],
        password: [],
        confirmPassword: []
      },
      credentials: {
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
      },
      mounted: false,
      errorsShowing: false,
      checkErrors: false
    }
    this.checkForErrors = this.checkForErrors.bind(this);
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
    let errors = {
      username: [],
      email: [],
      password: [],
      confirmPassword: []
    };
    let input = this.state.credentials;
    if(input.username.length < 6){
      errors.username.push('username must be longer than 5 characters');
    }
    if(input.password.length < 6){
      errors.password.push('password must be longer than 5 characters');
    }
    if(input.password === 'password'){
      errors.password.push('password cannot be the word password');
    }
    if(!input.email.includes('@')){
      errors.email.push('Not a valid email');
    }
    if(input.password !== input.confirmPassword){
      errors.confirmPassword.push('Password confirmation field must match password field');
    }
    this.setState({ errors : errors, errorsShowing: true, checkErrors: true }, () => {
      if(Object.values(this.state.errors).every(errorsSection => errorsSection.length === 0)){
        this.props.signupUser(this.state.credentials);
      }
    });
  }

  errorTests(field){
    let credentials = this.state.credentials;
    if(field === 'email'){
      if(!credentials.email.includes('@')){
        return 'Not a valid email';
      }
    }else if(field === 'password'){
      if(credentials.password.length < 6){
        return 'Password must be longer than 5 characters';
      }
    }else if(field === 'username'){
      if(credentials.username.length < 6){
        return 'Username must be longer than 5 characters';
      }
    }else if(field === 'confirmPassword'){
      if(credentials.confirmPassword !== credentials.password){
        return 'Password confirmation field must match password field'
      }
    }
    return false;
  }

  navigateToLogin(){
    this.props.history.push('/gateway');
  }

  update(field){
    return (e) => {
      let credentials = this.state.credentials;
      credentials[field] = e.currentTarget.value;
      this.setState({ credentials });
      if(this.state.checkErrors){
        this.checkForErrors(field);
      }
    }
  }

  checkForErrors(field){
    debugger;
    if(this.state.errors[field].length !== 0){
      debugger;
      if(!this.errorTests(field)){
        debugger;
        let errors = this.state.errors;
        errors[field] = [];
        this.setState({ errors });
      }
    }else if(this.state.errors[field].length === 0){
      let isError = this.errorTests(field);
      debugger;
      if(isError){
        debugger;
        let errors = this.state.errors;
        errors[field].push(isError);
        this.setState({ errors });
      }
    }
  }

  componentDidMount(){
    this.setState({mounted: true});
  }

  render(){
    return(
      <CSSTransition classNames='gateway-form-container-transition' in={this.state.mounted} timeout={500}>
        <div className='gateway-form-container' id='registration-form'>
        <div className='gateway-form-header'>
            <p className='gateway-form-header-banner'>Register!</p>
            <p className='gateway-form-navigator' onClick={this.navigateToLogin} >Go to login</p>
          </div>
          {/* <p className='gateway-form-header'>Register!</p> */}
          <form onSubmit={this.handleSubmit}>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>E-mail</p>
              <input className='gateway-form-input' type='text' value={this.state.credentials.email} onChange={this.update('email')}/>
              {createErrorsComponent(this.state.errors.email, this.state.errorsShowing)}
            </div>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>Username</p>
              <input className='gateway-form-input' type='text' value={this.state.credentials.username} onChange={this.update('username')}/>
              {createErrorsComponent(this.state.errors.username, this.state.errorsShowing)}
            </div>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>Password</p>
              <input className='gateway-form-input' type='password' value={this.state.credentials.password} onChange={this.update('password')}/>
              {createErrorsComponent(this.state.errors.password, this.state.errorsShowing)}
            </div>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>Confirm Password</p>
              <input className='gateway-form-input' type='password' value={this.state.credentials.confirm_password} onChange={this.update('confirmPassword')}/>
              {createErrorsComponent(this.state.errors.confirmPassword, this.state.errorsShowing)}
            </div>
            <div className='credentials-submit-row'>
              <input className='submit-button' type='submit' value='Register'/>
            </div>
          </form>
          {/* <p className='gateway-form-navigator' onClick={this.navigateToLogin} >Login Page</p> */}
        </div>
      </CSSTransition>
    )
  }
}

export default RegisterForm;