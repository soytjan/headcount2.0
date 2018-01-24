import kinderData from '../../data/kindergartners_in_full_day_program.js';
import CompareContainer from '../CompareContainer/CompareContainer.js';
import CardContainer from '../CardContainer/CardContainer.js';
import DistrictRepository from '../../helper.js';
import React, { Component } from 'react';
import Footer from '../Footer/Footer.js';
import Search from '../Search/Search.js';
import Header from '../Header/Header.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.district = new DistrictRepository(kinderData);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Search />
        <CompareContainer />
        <CardContainer Data={this.district.findAllMatches()} />
        <Footer />
      </div>
    );
  }
}

export default App;
