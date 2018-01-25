import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ districtData }) => {
  const cards = districtData.map((elem, index)=>(

    <Card {...elem} key={`card-${index}${Date.now()}`} />

  ))


  return (
    <div className='card-container'>
      {cards}
    </div>
  )
}

export default CardContainer;
