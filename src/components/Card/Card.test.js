import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<Card />, div);
});

describe('Card', () => {
  it.skip('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should start with a default selected state of false', () => {
    const renderedComponent = shallow(<Card />);
    expect(renderedComponent.state()).toEqual({ selected: false });
  })

  it('should have a class of low if data is below 0.5', () => {
    
  })

  it('should have a class of high if data is above 0.5', () => {
    
  })

  it('should change state to reflect when a card is selected', () => {
    
  })
})
