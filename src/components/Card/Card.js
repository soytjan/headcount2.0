import React from 'react';
import './Card.css';

const Card = ({location, districtData, select, id}) => {
  const years = Object.keys(districtData).map((year, index)=>{
    let style = districtData[year] >= .5 ? 'high':'low';
    return (<li className={style} key={`year-${index}`}> {year}: {districtData[year]}</li>)
  })
  
  return (
    <div id={id} className='card' onClick={() => select(location)}>
      <h3>{location}</h3>
      <ul>{years}</ul>
    </div>
  )
}

// add in PropTypes

export default Card
