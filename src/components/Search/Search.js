import React, { Component } from 'react';
import './Search.css';

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }
  }

  handleInputChange = (e) => {
    const { value } = e.target;

    // should we be setting state? is it necessary?
    this.setState({ location: value })

    this.props.handleSearch(value.toUpperCase());
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className='search'>
      <form onSubmit={this.handleSubmit}>  
        <input
          onChange={this.handleInputChange}
          value={this.state.location} 
          type='text' 
          placeholder='Search'/>
        <button onClick={() => this.props.handleSearch()}>Refresh</button>
      </form>
      </div>
    )
  }
}

export default Search;
