import React, { Component } from 'react';
import './Search.css';

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }
  }

  // shouldComponentUpdate() ?? 

  handleInputChange = (e) => {
    const { value } = e.target;

    this.setState({ location: value });
    this.props.handleSearch(value.toUpperCase());
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit')
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
        <button onClick={() => this.props.handleSearch()}>Show All</button>
      </form>
      </div>
    )
  }
}

export default Search;
