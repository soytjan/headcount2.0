import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const district = new DistrictRepository(kinderData);
    const mockData = district.findAllMatches();
    const selectMockData = [{}, {}, {}];
    /* eslint-disable */
    Date.now = jest.fn(() => 1482363367071);
    /* eslint-enable */
    const renderedComponent = shallow(
      <CardContainer
        districtData={mockData}
        selectedDistricts={selectMockData}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render cards for data passed in', () => {
    const district = new DistrictRepository(kinderData);
    const mockData = district.findAllMatches();
    const selectMockData = [{}, {}, {}];
    const renderedComponent = shallow(
      <CardContainer
        districtData={mockData}
        selectedDistricts={selectMockData}
      />
    );

    expect(renderedComponent.find('Card').length).toEqual(181);
  });

  it('should have class of card-container', () => {
    const district = new DistrictRepository(kinderData);
    const mockData = district.findAllMatches();
    const selectMockData = [{}, {}, {}];
    const renderedComponent = shallow(
      <CardContainer
        districtData={mockData}
        selectedDistricts={selectMockData}
      />
    );

    expect(renderedComponent.find('div').hasClass('card-container')).toEqual(
      true
    );
  });
});
