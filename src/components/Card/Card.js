import PropTypes from 'prop-types';
import React from 'react';
import './Card.css';
import leftArrow from './back-arrow-circular-symbol.svg';
import rightArrow from './right-arrow-circular-button.svg';

const Card = props => {
  let renderedCard;
  const { isSelected, onSelect } = props;
  let klass = isSelected ? 'card selected' : 'card';

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
      <div className="card-data">
        <h3>{location}</h3>
        <ul>{years}</ul>
      </div>
    );
  } else {
    const districtNames = Object.keys(props);
    klass = 'card middle';

    renderedCard = (
      <div className="compare">
        <div>
          <h3>{districtNames[1]}</h3>
          <h4>{props[districtNames[1]]}</h4>
        </div>
        <div>
          <h3 className="compare-header">District Comparison</h3>
          <div className="districts-avg">
            <img src={leftArrow} alt="left arrow" className="arrow" />
            <h4>{props.compared}</h4>
            <img src={rightArrow} alt="right arrow" className="arrow" />
          </div>
        </div>
        <div>
          <h3>{districtNames[2]}</h3>
          <h4>{props[districtNames[2]]}</h4>
        </div>
      </div>
    );
  }

  return (
    <div
      id={props.id}
      className={klass}
      onClick={() => {
        onSelect(props.location, props.id, props.isSelected);
      }}
    >
      {renderedCard}
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string,
  districtData: PropTypes.object,
  onSelect: PropTypes.func,
  id: PropTypes.string,
  isSelected: PropTypes.bool,
  compared: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};

export default Card;
