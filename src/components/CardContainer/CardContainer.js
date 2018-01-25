import React from 'react';
import Card from '../Card/Card.js';

const CardContainer = ({ data }) => {
  console.log(data)
  const cards = data.map((elem, index)=>(

    <Card {...elem} />

  ))


  return (
    <div>
      {cards}
    </div>
  )
}

export default CardContainer;