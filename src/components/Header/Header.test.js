import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

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

  it.skip('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
