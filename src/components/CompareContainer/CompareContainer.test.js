import React from 'react';
import ReactDOM from 'react-dom';
import CompareContainer from './CompareContainer';
import { shallow } from 'enzyme';

describe('CompareContainer', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<CompareContainer selectedDistricts={[]} />);
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CompareContainer selectedDistricts={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have class of compare-container', () => {
    expect(renderedComponent.find('div').hasClass('compare-container')).toEqual(
      true
    );
  });
});
