import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ location, districtData, select, id, selected}) => {
  const years = Object.keys(districtData).map((year, index) => {
    let style = districtData[year] >= 0.5 ? 'high' : 'low';
    return (
      <li className={style}  key={`year-${index}`}>
        {' '}
        {year}: {districtData[year]}
      </li>
    );
  });

  const handleCardClick = () => {
    select(location);
  };
console.log(selected);

  return (
    <div id={id} className={['card', selected].join(' ')} onClick={handleCardClick}>
      <h3>{location}</h3>
      <ul>{years}</ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string,
  districtData: PropTypes.object,
  select: PropTypes.func,
  id: PropTypes.string,
  selected: PropTypes.string
};

export default Card;
