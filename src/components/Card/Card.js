import React from 'react';
import './Card.css';

const Card = ({location, data}) => {

  const years = Object.keys(data).map((year)=>{
    let style = data[year] >= .5 ? 'high':'low';
    return (<li className={style}> {year}: {data[year]}</li>)
  })
  
  return (
    <div>
      <h1>{location}</h1>
      <ul>{years}</ul>
    </div>
  )
}

// add in PropTypes

export default Card
