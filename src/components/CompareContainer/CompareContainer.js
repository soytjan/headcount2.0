import React from 'react';
import './CompareContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CompareContainer = ({selectedDistricts, onComparison, onSelect}) => {
  let districtArray = selectedDistricts;

  if (selectedDistricts.length > 1) {
    const comparisonCard = onComparison(selectedDistricts[0].location, selectedDistricts[1].location);
    districtArray.splice(1, 0, comparisonCard);
  }

  const selectedCards = districtArray.map((card, index) => (
    <Card {...card} 
      key={`card-${index}${Date.now()}`} 
      id={`card-${index}${Date.now()}`} 
      isSelected={true} 
      onSelect={onSelect} 
    />
  ));

  return (
    <div className="compare-container">
      {selectedCards}
    </div>
  );
};

CompareContainer.propTypes = {
  selectedDistricts: PropTypes.array
};

export default CompareContainer;
