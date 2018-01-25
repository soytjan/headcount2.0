import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';

const CardContainer = ({ Data }) => {
  const cards = Data.map((elem, index)=>(

    <Card {...elem} key={index}/>

  ))


  return (
    <div className='card-container'>
      {cards}
    </div>
  )
}

export default CardContainer;
