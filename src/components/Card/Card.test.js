import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('should match the snapshot', () => {
    const mockData = { location: 'Colorado', districtData: { '2004': 0.302 } };
    const renderedComponent = shallow(<Card {...mockData} />);

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have a class of low if data is below 0.5', () => {
    const mockData = { location: 'Colorado', districtData: { '2004': 0.302 } };
    const renderedComponent = shallow(<Card {...mockData} />);

    expect(renderedComponent.find('li').hasClass('low')).toEqual(true);
  });

  it('should have a class of high if data is above 0.5', () => {
    const mockData = { location: 'Colorado', districtData: { '2004': 0.605 } };
    const renderedComponent = shallow(<Card {...mockData} />);

    expect(renderedComponent.find('li').hasClass('high')).toEqual(true);
  });

  it('should have location and years', () => {
    const mockData = { location: 'Colorado', districtData: { '2004': 0.605 } };
    const renderedComponent = shallow(<Card {...mockData} />);

    expect(renderedComponent.find('h3').length).toEqual(1);
    expect(renderedComponent.find('ul').length).toEqual(1);
  });

  it('should have conditional compare rendering if compared is true', () => {
<<<<<<< HEAD
    const mockData = {
      'COLORADO': 0.53,
      'COLORADO SPRINGS 11': 0.833,
      'compared': 0.636
    };
=======
    const mockData = { 'ACADEMY 20': 0.407, compared: 1 };
>>>>>>> Eslinted
    const renderedComponent = shallow(<Card {...mockData} />);

    expect(renderedComponent.find('div.compare').length).toEqual(1);
  });
});
