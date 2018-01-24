import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<Search />, div);
});

it('should match the snapshot', () => {
  const renderedComponent = shallow(<Search />)

  expect(renderedComponent).toMatchSnapshot()
})

it('should start with a default location state of an empty string', () => {
  const renderedComponent = shallow(<Search />);

  expect(renderedComponent.state()).toEqual({ location: '' })
})

it('should update location state on change', () => {
  const renderedComponent = shallow(<Search />);
  const mockInput = 'a';

  renderedComponent.find('input').simulate('change', { target: { value: 'a' }});

  expect(renderedComponent.state().location).toEqual('a');
})

it('when submitInput is called, should send data to App', () => {
  // don't know how to mock this or if it needs to be mocked
})

it('', () => {
  
})