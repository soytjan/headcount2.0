import React, { Component } from 'react'

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
      <div className='Search'>
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
