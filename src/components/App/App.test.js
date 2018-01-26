import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   // ReactDOM.render(<App />, div);
// });

describe('App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<App />)
  })

  it.skip('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('initial state starts with an array with all the district objects', () => {
    const district = new DistrictRepository(kinderData);
    const mockData = district.findAllMatches();

    expect(renderedComponent.state().data).toEqual(mockData);
  } )

  it('user can search through districts and handleSearch filters cards displayed on screen', () => {
    const renderedComponent = mount(<App />)
    const result = [{location: 
      'ACADEMY 20', districtData: {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385, 2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49}}];

    renderedComponent.find('input').simulate('change', { target: { value: 'ACADEMY 20' }});

    expect(renderedComponent.state().data).toEqual(result);
    expect(renderedComponent.find('div.card').length).toEqual(1);  
  })
})