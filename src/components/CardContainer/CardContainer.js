import React from 'react';
import Card from '../Card/Card.js';

const CardContainer = ({ Data }) => {
  const cards = Data.map((elem)=>(

    <Card {...elem} />

  ))


  return (
    <div>
      {cards}
    </div>
  )
}

export default CardContainer;