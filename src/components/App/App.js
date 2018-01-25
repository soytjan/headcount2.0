import React, { Component } from 'react';
import './App.scss';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.district = new DistrictRepository(kinderData);
    this.data = this.district.findAllMatches();
    this.state = {};
  }

  handleSearch = (input) => {
    const data = this.district.findAllMatches(input);

    this.setState({ data });
  }

  render() {
    return (
      <div>
        Welcome To Headcount 2.0
        <CardContainer
          data={this.data}
        />
      </div>
    );
  }
}

export default App;
