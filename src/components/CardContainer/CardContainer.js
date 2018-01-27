import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import './CardContainer.css';
import React from 'react';

const CardContainer = ({ districtData, select, compare }) => {
  const cards = districtData.map((districtObject, index) => {
    districtObject.selected = 'not-selected';

    compare.forEach(compareObject => {
      if (compareObject.location === districtObject.location) {
        districtObject.selected = 'selected';
      }
    });
    return (
      <Card
        {...districtObject}
        id={`card-${index}${Date.now()}`}
        key={`card-${index}${Date.now()}`}
        select={select}
      />
    );
  });

  return <div className="card-container">{cards}</div>;
};

CardContainer.propTypes = {
  districtData: PropTypes.array,
  select: PropTypes.func,
  compare: PropTypes.array
};

export default CardContainer;
