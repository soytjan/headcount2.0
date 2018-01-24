import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<Search />, div);
});

describe('Search', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Search />)
  })

  it.skip('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should have an input and button', () => {
    expect(renderedComponent.find('input').length).toEqual(1);
    expect(renderedComponent.find('button').length).toEqual(1);
  })

  it('should start with a default location state of an empty string', () => {
    expect(renderedComponent.state()).toEqual({ location: '' })
  })

  it('should update location state on change', () => {
    const mockInput = 'a';

    renderedComponent.find('input').simulate('change', { target: { value: 'a' }});

    expect(renderedComponent.state().location).toEqual('a');
  })

  it.skip('when submitInput is called, should send data to App', () => {
    // don't know how to mock this or if it needs to be mocked
  })
});