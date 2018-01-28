import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    };
  }

  handleInputChange = event => {
    const { value } = event.target;

    this.setState({ location: value });
    this.props.handleSearch(value.toUpperCase());
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.location}
            type="text"
            placeholder="Search"
          />
          <button onClick={() => this.props.handleSearch()}>Show All</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func
};

export default Search;
