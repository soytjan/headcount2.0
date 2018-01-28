import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('CardContainer', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<CardContainer />);
  });

  it.skip('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it.skip('should render cards for data passed in', () => {
    const district = new DistrictRepository(kinderData);
    const mockData = district.findAllMatches();
    const renderedComponent = shallow(
      <CardContainer districtData={mockData} />
    );

    expect(renderedComponent.find('Card').length).toEqual(181);
  });

  // test for className of card-container
});
