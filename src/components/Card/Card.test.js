import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';


describe('Card', () => {
  it.skip('should match the snapshot', () => {
    const mockData = {location: 'Colorado', data: {'2004': 0.302}}
    const renderedComponent = shallow(<Card {...mockData} />);
    
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should have a class of low if data is below 0.5', () => {
    const mockData = {location: 'Colorado', data: {'2004': 0.302}}
    const renderedComponent = shallow(<Card {...mockData} />);

    expect(renderedComponent.find('li').hasClass('low')).toEqual(true);
  })

  it('should have a class of high if data is above 0.5', () => {
    const mockData = {location: 'Colorado', data: {'2004': 0.605}}
    const renderedComponent = shallow(<Card {...mockData} />);

    expect(renderedComponent.find('li').hasClass('high')).toEqual(true);
  })

  // 1. test that checks for location and years (pass in mockData and check for it)
  // 2. test that checks for the conditional rendering that we are going to do with the compare cards
  // 3. test that checks to see if the class changes when it is selected or whatever we are going to do 

})
