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

    this.setState({ location: value })
  }

  render() {
    return (
      <div className='search'>
      <form>  
        <input
          onChange={this.handleInputChange} 
          type='text' 
          placeholder='Search'/>
        <button>Search</button>
      </form>
      </div>
    )
  }
}

export default Search;
