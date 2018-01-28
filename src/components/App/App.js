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
      selectedDistricts: []
    };
  }

  handleDistrictSearch = input => {
    const districtData = this.district.findAllMatches(input);
    this.setState({ districtData });
  };

  handleDistrictSelect = (location, id, isSelected) => {
    if (isSelected) {
      this.unselectDistrict(location);
    } else {
      this.selectDistrict(location);
    }  
  };

  unselectDistrict = location => {
    const selectedDistricts = this.state.selectedDistricts.filter(district => location !== district.location && district.districtData);

    this.setState({ selectedDistricts });
  };

  selectDistrict = location => {
    let { selectedDistricts } = this.state;
    let cards;

    if (selectedDistricts.length < 2) {
      cards = [...selectedDistricts, this.district.findByName(location)];
    } else {
      cards = [...selectedDistricts.splice(2), this.district.findByName(location)];
    }

    this.setState({ selectedDistricts: cards });
  };

  handleComparison = () => {  
    const location1 = this.state.selectedDistricts[0].location;
    const location2 = this.state.selectedDistricts[1].location;
    return this.district.compareDistrictAverages(location1, location2);
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Search handleDistrictSearch={this.handleDistrictSearch} />
        <CompareContainer 
          selectedDistricts={this.state.selectedDistricts}
          onSelect={this.handleDistrictSelect}
          onComparison={this.handleComparison}
        />
        <CardContainer
          districtData={this.state.districtData}
          onSelect={this.handleDistrictSelect}
          selectedDistricts={this.state.selectedDistricts}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
