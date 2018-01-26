import React from 'react';
import './CompareContainer.css';
import Card from '../Card/Card';

const CompareContainer = ({comparedCards}) => {
  const selectedCards = comparedCards.map(card => <Card />)
  return (
    <div className="compare-container">
    {selectedCards}
    </div>
  )
}

export default CompareContainer;
