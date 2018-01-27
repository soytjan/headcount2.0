import React from 'react';
import './CompareContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CompareContainer = ({comparedCards}) => {
  const selectedCards = comparedCards.map((card, index) => (
    <Card {...card} key={`card-${index}${Date.now()}`} selected='selected' />
  ));
  return (
    <div className="compare-container">
      {selectedCards}
    </div>
  );
};

CompareContainer.propTypes = {
  comparedCards: PropTypes.array
};

export default CompareContainer;
