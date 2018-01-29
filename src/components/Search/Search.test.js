import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Search />);
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should start with a default location state of an empty string', () => {
    expect(renderedComponent.state()).toEqual({ location: '' });
  });

  it('should update state and call method passed down from props', () => {
    /* eslint-disable */
    const mockSubmit = jest.fn();
    /* eslint-enable */
    const renderedComponent = shallow(
      <Search handleDistrictSearch={mockSubmit} />
    );

    renderedComponent.find('input').simulate('change', {
      target: {
        value: 'a'
      }
    });

    expect(renderedComponent.state().location).toEqual('a');
    expect(mockSubmit.mock.calls.length).toBe(1);
  });
});
