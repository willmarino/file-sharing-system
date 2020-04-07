import React from 'react';
import { CSSTransition } from 'react-transition-group';
import createErrorsComponent from '../../errors/errors_component';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      errors: {
        email: [],
        password: []
      },
      credentials : {
        email : '',
        password : ''
      },
      mounted: false,
      errorsShowing: false,
      checkErrors: false
    }
    this.checkForErrors = this.checkForErrors.bind(this);
    this.errorTests = this.errorTests.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToRegister = this.navigateToRegister.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount(){
    this.setState({ mounted: true })
  }

  handleSubmit(e){
    e.preventDefault();
    this.validate();
  }

  validate(){
    let errors = {
      email: [],
      password: []
    };
    if(this.errorTests('password')){
      errors.password.push('Not a valid password');
    }
    if(this.errorTests('email')){
      errors.email.push('Not a valid email')
    }
    this.setState({ errors: errors, errorsShowing: true, checkErrors: true }, () => {
      if(Object.values(this.state.errors).every(errorsSection => errorsSection.length === 0)){
        this.props.loginUser(this.state.credentials);
      }
    });
  }

  errorTests(field){
    if(field === 'email'){
      if(!this.state.credentials.email.includes('@')){
        return 'Not a valid email';
      }
    }else if(field === 'password'){
      if(this.state.credentials.password.length < 6){
        return 'Not a valid password';
      }
    }
    return false;
  }

  navigateToRegister(){
    this.props.history.push('/gateway/register');
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
    if(this.state.errors[field].length !== 0){
      if(!this.errorTests(field)){
        let errors = this.state.errors;
        errors[field] = [];
        this.setState({ errors });
      }
    }else if(this.state.errors[field].length === 0){
      let isError = this.errorTests(field);
      if(isError){
        let errors = this.state.errors;
        errors[field].push(isError);
        this.setState({ errors });
      }
    }
  }

  render(){
    return(
      <CSSTransition classNames='gateway-form-container-transition' in={this.state.mounted} timeout={500}>
        <div className='gateway-form-container'>
          <p className='gateway-form-header'>Login!</p>
          <form onSubmit={this.handleSubmit}>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>E-mail</p>
              <input className='gateway-form-input' type='text' value={this.state.credentials.email} onChange={this.update('email')}/>
              {createErrorsComponent(this.state.errors.email, this.state.errorsShowing)}
            </div>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>Password</p>
              <input className='gateway-form-input' type='password' value={this.state.credentials.password} onChange={this.update('password')}/>
              {createErrorsComponent(this.state.errors.password, this.state.errorsShowing)}
            </div>
            <div className='credentials-submit-row'>
              <input className='submit-button' type='submit' value='Login'/>
            </div>
          </form>
          {createErrorsComponent(this.props.sessionErrors, this.state.errorsShowing)}
          <p className='gateway-form-navigator' onClick={this.navigateToRegister} >Registration Page</p>
        </div>
      </CSSTransition>
    )
  }
}

export default LoginForm;