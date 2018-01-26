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
      data: this.district.findAllMatches(),
      comparedCards: []
    };
  }

  handleSearch = (input) => {
    const data = this.district.findAllMatches(input);
    console.log(data)
    this.setState({ data });
  }

  handleSelect = (location) => {
    if (this.state.comparedCards.length < 2) {
      this.setState({comparedCards: [...this.state.comparedCards, this.district.findByName(location)]});
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Search handleSearch={this.handleSearch} />
        <CompareContainer comparedCards={this.state.comparedCards} />
        <CardContainer districtData={this.state.data} select={this.handleSelect} />
        <Footer />
      </div>
    );
  }
}

export default App;
