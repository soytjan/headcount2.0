import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Search />)
  })

  it.skip('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  // probably redundant because of the snapshot
  it('should have an input and button', () => {
    expect(renderedComponent.find('input').length).toEqual(1);
    expect(renderedComponent.find('button').length).toEqual(1);
  })

  it('should start with a default location state of an empty string', () => {
    expect(renderedComponent.state()).toEqual({ location: '' })
  })

  it('should update location state on change and call method passed down from props', () => {
    const mockSubmit = jest.fn();
    const renderedComponent = shallow(<Search handleSearch={mockSubmit} />);

    renderedComponent.find('input').simulate('change', { target: { value: 'a' }});

    expect(renderedComponent.state().location).toEqual('a');
    expect(mockSubmit.mock.calls.length).toBe(1);
  })
});