import React from 'react';
import './Card.css';

const Card = ({location, data}) => {

  const years = Object.keys(data).map((year, index)=>{
    let style = data[year] >= .5 ? 'high':'low';
    return (<li className={style} key={index}> {year}: {data[year]}</li>)
  })
  
  return (
    <div className='card' >
      <h3>{location}</h3>
      <ul>{years}</ul>
    </div>
  )
}

// add in PropTypes

export default Card
