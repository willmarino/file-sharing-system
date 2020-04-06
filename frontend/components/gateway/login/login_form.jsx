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
    debugger;
    this.setState({ errors: [] })
    debugger;
    this.validate();
    debugger;
    if(this.state.errors.length === 0){
      debugger;
      this.props.loginUser(this.state.credentials);
    }
    debugger;
  }

  validate(){
    let errors = [];
    let input = this.state.credentials;
    if(input.password.length < 6){
      errors.push(<li key='error1'><p>Not a valid password</p></li>);
    }
    if(!input.email.includes('@')){
      errors.push(<li key='error2'><p>Email must be valid</p></li>);
    }
    debugger;
    this.setState({ errors });
    debugger;
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
        <ul>{this.state.errors}</ul>
      </div>
    )
  }
}

export default LoginForm;