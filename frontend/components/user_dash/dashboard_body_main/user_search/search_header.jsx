import React from 'react';

class SearchHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateQuery(e){
    this.setState({ query : e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.searchForUsers({query: this.state.query})
  }

  render(){
    return(
      <div className='search-header-container'>
        <form className='user-search-form' onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.updateQuery} value={this.state.query}/>
          <input type="submit" className='small-submit-button' value='>'/>
        </form>
      </div>
    )
  }
}

export default SearchHeader;