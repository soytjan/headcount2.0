import React from 'react';
import ReactDOM from 'react-dom';
import CompareContainer from './CompareContainer';
import { shallow } from 'enzyme';

describe('CompareContainer', () => {
  it('should match the snapshot', () => {
    const mockSelectedDistricts = [];
    const renderedComponent = shallow(<CompareContainer selectedDistricts={mockSelectedDistricts} />);

    expect(renderedComponent).toMatchSnapshot();
  });
});
