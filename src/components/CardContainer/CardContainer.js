import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ Data }) => {
  const cards = Data.map((elem)=>(

    <Card {...elem} />

  ))


  return (
    <div className='card-container'>
      {cards}
    </div>
  )
}

export default CardContainer;
