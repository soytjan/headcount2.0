import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   // ReactDOM.render(<App />, div);
// });

describe('App', () => {
  let renderedComponent;

  beforeEach(() => {
    let renderedComponent = shallow(<App />)
  })

  it.skip('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('when handleSubmit is called with a location, the data should filter the location', () => {
    const mockedLocation = 'Colorado';

    renderedComponent.instance.handleSubmit(mockedLocation);

    // expect(renderedComponent.state().search).toEqual(mockedLocation)
  } )

  it('handleSubmit should be case insensitive', () => {
    const mockedLocation = 'CoLorAdo';

    renderedComponent.instance.handleSubmit(mockedLocation);

    // something that tests it here    
  })

})