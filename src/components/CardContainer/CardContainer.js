import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({ districtData, select }) => {
  const cards = districtData.map((elem, index) => (
    <Card
      {...elem}
      id={`card-${index}${Date.now()}`}
      key={`card-${index}${Date.now()}`}
      select={select}
    />
  ));

  return <div className="card-container">{cards}</div>;
};

CardContainer.propTypes = {
  districtData: PropTypes.array,
  select: PropTypes.func
};

export default CardContainer;
