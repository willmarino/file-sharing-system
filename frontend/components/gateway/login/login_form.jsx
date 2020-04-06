import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import createErrorsComponent from '../../errors/errors_component';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      errors: {
        emailErrors: [],
        passwordErrors: []
      },
      credentials : {
        email : '',
        password : ''
      },
      mounted: false,
      errorsShowing: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToRegister = this.navigateToRegister.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount(){
    this.setState({mounted: true})
  }

  handleSubmit(e){
    e.preventDefault();
    this.validate();
  }

  validate(){
    let errors = {
      emailErrors: [],
      passwordErrors: []
    };
    let input = this.state.credentials;
    if(input.password.length < 6){
      errors.passwordErrors.push('Not a valid password');
    }
    if(!input.email.includes('@')){
      errors.emailErrors.push('Not a valid email')
    }
    this.setState({ errors: errors, errorsShowing: true }, () => {
      if(Object.values(this.state.errors).every(errorsSection => errorsSection.length === 0)){
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
    debugger;
    return(
      <CSSTransition classNames='gateway-form-container-transition' in={this.state.mounted} timeout={500}>
        <div className='gateway-form-container'>
          <p className='gateway-form-header'>Login!</p>
          <form onSubmit={this.handleSubmit}>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>E-mail</p>
              <input className='gateway-form-input' type='text' value={this.state.credentials.email} onChange={this.update('email')}/>
              {createErrorsComponent(this.state.errors.emailErrors, this.state.errorsShowing)}
            </div>
            <div className='credentials-form-row'>
              <p className='credentials-form-row-header'>Password</p>
              <input className='gateway-form-input' type='password' value={this.state.credentials.password} onChange={this.update('password')}/>
              {createErrorsComponent(this.state.errors.passwordErrors, this.state.errorsShowing)}
            </div>
            <div className='credentials-submit-row'>
              <input className='submit-button' type='submit' value='Login'/>
            </div>
          </form>
          <p className='gateway-form-navigator' onClick={this.navigateToRegister} >Registration Page</p>
        </div>
      </CSSTransition>
    )
  }
}

export default LoginForm;