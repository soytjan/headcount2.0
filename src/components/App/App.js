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

    this.state = {
      districtData: this.district.findAllMatches(),
      comparedCards: []
    };
  }

  handleSearch = input => {
    const districtData = this.district.findAllMatches(input);
    this.setState({ districtData });
  };

  handleSelect = location => {
    let { comparedCards } = this.state;
    let cards;
    if (comparedCards.length < 2) {
      cards = [...comparedCards, this.district.findByName(location)];
    } else {
      cards = [...comparedCards.splice(1), this.district.findByName(location)];
    }
    this.setState({ comparedCards: cards });
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Search handleSearch={this.handleSearch} />
        <CompareContainer comparedCards={this.state.comparedCards} />
        <CardContainer
          districtData={this.state.districtData}
          select={this.handleSelect}
          compare={this.state.comparedCards}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
