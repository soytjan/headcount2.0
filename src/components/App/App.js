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
      // selectedDistricts instead of comparedCards
      comparedCards: []
    };
  }

  // handleDistrictSearch
  handleSearch = input => {
    const districtData = this.district.findAllMatches(input);
    this.setState({ districtData });
  };

  // to unselect card, need to see if it's in the comparison array, and if it is, splice it out
  // pass in from the card and filter to look and see what !==
  // comparedCards.filter --> returns !== the passed in id

  // handleDistrictSelect
  handleSelect = location => {  
    // console.log(this.state.comparedCards)  
    // const card = this.state.comparedCards.length === 2 ? 
    //                 this.state.comparedCards.splice(1) : this.state.comparedCards[0];
    

    // this.setState({
    //   comparedCards: [
    //     card,
    //     this.district.findByName(location)
    //   ]
    // });

    const selectedCard = this.district.findByName(location);

    // mark districs as selected in this.state.districtData
    const modifiedDistricts = this.state.districtData.map(district => {
      if (district.location === selectedCard.location) {
        district.isSelected = true;
      } else {
        district.isSelected = false;
      }
      return district;
    });
    this.setState({districtData: modifiedDistricts})
    console.log(modifiedDistricts)
    // use filter to make sure that you can't select a card twice



    // deciding which cards are selected
    if (this.state.comparedCards.length < 2) {
      this.setState({
        comparedCards: [
          ...this.state.comparedCards,
          selectedCard
        ]
      });
    } else {
      this.setState({
        comparedCards: [
          ...this.state.comparedCards.splice(1),
          selectedCard
        ]
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Search handleSearch={this.handleSearch} />
        <CompareContainer comparedCards={this.state.comparedCards} />
        {/*
        * CardContainer could be called DistrictContainer
        */}
        <CardContainer
          districtData={this.state.districtData}
          // onSelect 
          select={this.handleSelect}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
