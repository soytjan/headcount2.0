import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({ districtData, select, compare }) => {
  const cards = districtData.map((districtObject, index) => {
    compare.forEach((compareObject)=>{
      if (compareObject.location === districtObject.location){
        
        
        districtObject.selected = 'selected';
      } 
    });
    return <Card
      {...districtObject}
      id={`card-${index}${Date.now()}`}
      key={`card-${index}${Date.now()}`}
      select={select}
    />;
});

  return <div className="card-container">{cards}</div>;
};

CardContainer.propTypes = {
  districtData: PropTypes.array,
  select: PropTypes.func,
  compare: PropTypes.array
};

export default CardContainer;
