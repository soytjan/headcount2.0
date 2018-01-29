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
        location: 'ACADEMY 20'
      }
    ];
    renderedComponent
      .find('input')
      .simulate('change', { target: { value: 'ACADEMY 20' } });

    expect(renderedComponent.state().selectedDistricts).toEqual([]);

    renderedComponent.find('div.card').simulate('click');

    expect(renderedComponent.state().selectedDistricts).toEqual(result);
    expect(renderedComponent.state().selectedDistricts.length).toEqual(1);
  });

  it('should remove card from selectedDistricts array', () => {
    const renderedComponent = mount(<App />);
    renderedComponent
      .find('input')
      .simulate('change', { target: { value: 'ACADEMY 20' } });

    expect(renderedComponent.state().selectedDistricts).toEqual([]);

    renderedComponent.find('div.card').simulate('dblclick');

    expect(renderedComponent.state().selectedDistricts).toEqual([]);
    expect(renderedComponent.state().selectedDistricts.length).toEqual(0);
  });

  it('should add compare object to selectedDistricts array when two cards are clicked', () => {
    const renderedComponent = mount(<App />);
    const result = [
      {
        districtData: {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741,
        },
        location: 'COLORADO'
      },
      { "COLORADO": 0.53, "COLORADO SPRINGS 11": 0.833, "compared": 0.636, },
      {
        districtData: {
          "2004": 0.069,
          "2005": 0.509,
          "2006": 0.638,
          "2007": 0.994,
          "2008": 0.992,
          "2009": 1,
          "2010": 0.993,
          "2011": 0.994,
          "2012": 0.993,
          "2013": 0.989,
          "2014": 0.994,
        },
        location: 'COLORADO SPRINGS 11'
      }
    ];

    renderedComponent
      .find('input')
      .simulate('change', { target: { value: 'COL' } });
    renderedComponent.find('div.card').first().simulate('click');
    renderedComponent.find('div.card').last().simulate('click');

    expect(renderedComponent.state().selectedDistricts).toEqual(result);
    expect(renderedComponent.state().selectedDistricts.length).toEqual(3);
  });

  it('should update selectedDistricts array in state so that comparison object is in the 1 index', () => {
    const renderedComponent = mount(<App />);
    const result = [
      {
        districtData: {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741,
        },
        location: 'COLORADO'
      },
      { "COLORADO": 0.53, "COLORADO SPRINGS 11": 0.833, "compared": 0.636, },
      {
        districtData: {
          "2004": 0.069,
          "2005": 0.509,
          "2006": 0.638,
          "2007": 0.994,
          "2008": 0.992,
          "2009": 1,
          "2010": 0.993,
          "2011": 0.994,
          "2012": 0.993,
          "2013": 0.989,
          "2014": 0.994,
        },
        location: 'COLORADO SPRINGS 11'
      }
    ];

    renderedComponent
      .find('input')
      .simulate('change', { target: { value: 'COL' } });
    renderedComponent.find('div.card').first().simulate('click');
    renderedComponent.find('div.card').last().simulate('click');

    expect(renderedComponent.state().selectedDistricts[1].compared).toEqual(0.636);
  });
});
