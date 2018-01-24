import React, { Component } from 'react';
import './App.scss';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.district = new DistrictRepository(kinderData);
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
