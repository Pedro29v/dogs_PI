import React from 'react';
import { Link } from 'react-router-dom';

function Card({id,name,weight,temperament,image}) {

  return (
    <div>
        <h3><Link to={`/home/${id}`}>{name}</Link></h3>
        <p>weight: {weight}</p>
        <p>Temperament: {temperament}</p>
        <img src={image} alt={name} />
    </div>
  )
}

export default Card