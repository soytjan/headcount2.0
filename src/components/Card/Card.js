import PropTypes from 'prop-types';
import React from 'react';
import './Card.css';

const Card = (props) => {
  let renderedCard;
  const {isSelected, onSelect} = props;
  const klass = isSelected ? 'card selected' : 'card';

  if (!props.compared) {
    const {location, districtData, id} = props;
    const years = Object.keys(districtData).map((year, index) => {
      const style = districtData[year] >= 0.5 ? 'high' : 'low';
      return (
        <li className={style}  key={`year-${index}`}>
          {' '}
          {year}: {districtData[year]}
        </li>
      );
    });
    
    renderedCard = 
      (
        <div id={id} className={klass} onClick={() => {onSelect(location, id, isSelected)}}>
          <h3>{location}</h3>
          <ul>{years}</ul>
        </div>
      )
  } else {
    const districtNames = Object.keys(props);

    renderedCard = (
      <div className='card compare'>
      <h3>{districtNames[1]}</h3>
      <h4>-- {props.compared} --</h4>
      <h3>{districtNames[2]}</h3>
      </div>
    )
  }

  return (
    <div>
    {renderedCard}
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string,
  districtData: PropTypes.object,
  onSelect: PropTypes.func,
  id: PropTypes.string,
  isSelected: PropTypes.bool
};

export default Card;
