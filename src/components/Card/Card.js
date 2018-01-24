import React from 'react';

const Card = ({location, data}) => {

  const years = Object.keys(data).map((year)=>{
    return (<li>{year}: {data[year]}</li>)
  })
  
  return (
    <div>
      <h1>{location}</h1>
      <ul>{years}</ul>
    </div>
  )
}

export default Card
