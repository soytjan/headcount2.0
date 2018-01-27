import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';
                                        // handleSelect
const CardContainer = ({ districtData, select }) => {
  const cards = districtData.map((elem, index) => (
    // probably fine to call this Card 
    <Card
      {...elem}
      id={`card-${index}${Date.now()}`}
      key={`card-${index}${Date.now()}`}
      // onSelect={handleSelect}
      klassName={elem.isSelected ? "selected-card" : "card"} // selected-card .. ""
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
