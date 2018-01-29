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
    this.props.handleDistrictSearch(value.toUpperCase());
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleDistrictSearch(this.state.location.toUpperCase());
  };

  handleClick = () => {
    this.setState({ location: '' });
    this.props.handleDistrictSearch();
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit} className='search-form'>
          <input
            onChange={this.handleInputChange}
            value={this.state.location}
            type="text"
            placeholder="Search districts"
          />
        </form>
        <button onClick={this.handleClick}>Show All Districts</button>
      </div>
    );
  }
}

Search.propTypes = {
  handleDistrictSearch: PropTypes.func
};

export default Search;
