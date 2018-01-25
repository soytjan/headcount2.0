import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ data }) => {
  console.log(data)
  const cards = data.map((elem, index)=>(

    <Card {...elem} />

  ))


  return (
    <div className='card-container'>
      {cards}
    </div>
  )
}

export default CardContainer;
