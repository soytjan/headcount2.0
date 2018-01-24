import React from 'react';
import './Card.css';

const Card = ({location, data}) => {

  const years = Object.keys(data).map((year)=>{
    let style = data[year]>=.5? 'high':'low'
    return (<li className={style} >{year}: {data[year]}</li>)
  })
  
  return (
    <div>
      <h3>{location}</h3>
      <ul>{years}</ul>
    </div>
  )
}

export default Card;
