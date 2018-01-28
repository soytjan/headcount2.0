import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import './CardContainer.css';
import React from 'react';

const CardContainer = ({ districtData, onSelect, selectedDistricts }) => {
  const cards = districtData.map((districtObject, index) => {
    districtObject.isSelected = false;

    selectedDistricts.forEach(compareObject => {
      if (compareObject.location === districtObject.location) {
        districtObject.isSelected = true;
      }
    });
    return (
      <Card
        {...districtObject}
        id={`card-${index}${Date.now()}`}
        key={`card-${index}${Date.now()}`}
        onSelect={onSelect}
      />
    );
  });

  return <div className="card-container">{cards}</div>;
};

CardContainer.propTypes = {
  districtData: PropTypes.array,
  select: PropTypes.func,
  selectedDistricts: PropTypes.array
};

export default CardContainer;
