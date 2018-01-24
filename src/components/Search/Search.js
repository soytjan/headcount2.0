import React, { Component } from 'react'

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }
  }

  render() {
    return (
      <div className='Search'>
        <input type='text' placeholder='Search'/>
        <button>Search</button>
      </div>
    )
  }
}

export default Search;
