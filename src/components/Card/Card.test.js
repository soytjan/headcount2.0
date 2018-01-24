import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<Card />, div);
});

describe('Card', () => {

  it('should start with a default selected state of false', () => {
    const renderedComponent = shallow(<Card />);
    expect(renderedComponent.state()).toEqual({ selected: false });
  })

  it('')
  
})
