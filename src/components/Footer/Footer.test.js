import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Footer', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Footer />);
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
