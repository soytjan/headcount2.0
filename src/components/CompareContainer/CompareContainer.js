import React from 'react';
import './CompareContainer.css';
import Card from '../Card/Card';

const CompareContainer = ({comparedCards}) => {
  console.log(comparedCards);
  const selectedCards = comparedCards.map((card, index) => (
    <Card {...card} key={`card-${index}${Date.now()}`} />
  ));
  return (
    <div className="compare-container">
    {selectedCards}
    </div>
  )
}

export default CompareContainer;
