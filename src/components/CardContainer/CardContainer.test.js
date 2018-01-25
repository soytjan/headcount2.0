import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('CardContainer', () => {
  it.skip('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should render cards for all data passed in', () => {
    const renderedComponent = shallow(<CardContainer />);

    expect(renderedComponent.find('Card').length).toEqual(181);
  })

  it('should mount cards for all data passed in', () => {
    // const renderedComponent = mount(<CardContainer />);

    // expect(renderedComponent.)
  })
})
