import React from 'react';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message : 'before'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ message : 'after' });
  }

  render(){
    return(
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <p>username</p>
            <input type='text'/>
          </div>
          <div>
            <p>password</p>
            <input type='text'/>
          </div>
          <div>
            <input type='submit' value='submit'/>
          </div>
        </form>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default LoginForm;