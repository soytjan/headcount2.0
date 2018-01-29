import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js';

describe('App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('initial state starts with an array with all the district objects', () => {
    const district = new DistrictRepository(kinderData);
    const mockData = district.findAllMatches();

    expect(renderedComponent.state().districtData).toEqual(mockData);
  });

  it('user can search districts and filters cards displayed on screen', () => {
    const renderedComponent = mount(<App />);
    const result = [
      {
        districtData: {
          '2004': 0.302,
          '2005': 0.267,
          '2006': 0.354,
          '2007': 0.392,
          '2008': 0.385,
          '2009': 0.39,
          '2010': 0.436,
          '2011': 0.489,
          '2012': 0.479,
          '2013': 0.488,
          '2014': 0.49
        },
        isSelected: false,
        location: 'ACADEMY 20'
      }
    ];

    renderedComponent
      .find('input')
      .simulate('change', { target: { value: 'ACADEMY 20' } });

    expect(renderedComponent.state().districtData).toEqual(result);
    expect(renderedComponent.find('div.card').length).toEqual(1);
  });

  it('should start with a empty array for state.selectedDistricts', () => {
    expect(renderedComponent.state().selectedDistricts).toEqual([]);
  });

  it('should add card to selectedDistricts array', () => {
    const renderedComponent = mount(<App />);
    renderedComponent
      .find('input')
      .simulate('change', { target: { value: 'ACADEMY 20' } });

    expect(renderedComponent.state().selectedDistricts).toEqual([]);

    renderedComponent.find('div.card').simulate('click');

    expect(renderedComponent.state().selectedDistricts).toEqual([{}]);
    expect(renderedComponent.find('div.card').length).toEqual(1);
    //test the function handleDistrictSelect
    //mount
    //find card 
    // simulate click on the card
    //check that the card is in the array
  });

  it('should remove card from selectedDistricts array', () => {
    //test unselectDistrict function
    // same thing as above just check that it is removed
  });

  it('should add compare district to selectedDistricts array', () => {
    //Test that the compare object gets added to the array
    //search to narrow down cards
  });

  it('should ', () => {
    //test handleDistrictComparison function
  });
});
