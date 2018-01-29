import PropTypes from 'prop-types';
import React from 'react';
import './Card.css';
import leftArrow from './back-arrow-circular-symbol.svg';
import rightArrow from './right-arrow-circular-button.svg';

const Card = props => {
  let renderedCard;
  const { isSelected, onSelect } = props;
  const klass = isSelected ? 'card selected' : 'card';

  if (!props.compared) {
    const { location, districtData, id } = props;
    const years = Object.keys(districtData).map((year, index) => {
      const style = districtData[year] >= 0.5 ? 'high' : 'low';
      return (
        <li className={style} key={`year-${index}`}>
          {year}: {districtData[year]}
        </li>
      );
    });

    renderedCard = (
      <div
        id={id}
        className={klass}
        onClick={() => {
          onSelect(location, id, isSelected);
        }}
      >
        <h3>{location}</h3>
        <ul>{years}</ul>
      </div>
    );
  } else {
    const districtNames = Object.keys(props);

    renderedCard = (
      <div className="card compare">
        <div>
          <h3>{districtNames[1]}</h3>
          <h4>{props[districtNames[1]]}</h4>
        </div>
        <div className="districts-avg">
          <img src={leftArrow} alt="left arrow" className="arrow" />
          <h4>{props.compared}</h4>
          <img src={rightArrow} alt="right arrow" className="arrow" />
        </div>
        <div>
          <h3>{districtNames[2]}</h3>
          <h4>{props[districtNames[2]]}</h4>
        </div>
      </div>
    );
  }

  return <div>{renderedCard}</div>;
};

Card.propTypes = {
  compared: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  districtData: PropTypes.object,
  id: PropTypes.string,
  isSelected: PropTypes.bool,
  compared: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};

export default Card;
