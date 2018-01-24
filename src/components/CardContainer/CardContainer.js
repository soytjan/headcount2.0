import React from 'react';
import Card from '../Card/Card.js';

const CardContainer = ({ Data }) => {
  console.log(Data)
  const cards = Data.map((elem, index)=>(

    <Card {...elem} />

  ))


  return (
    <div>
      {cards}
    </div>
  )
}

export default CardContainer;