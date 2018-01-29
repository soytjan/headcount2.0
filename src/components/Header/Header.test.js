import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Header />);
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
