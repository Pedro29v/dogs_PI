import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card({id,name,weight,temperament,image}) {

  const divStyle={
    backgroundImage:`url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover'
  }

  return (

    <div className='card' style={divStyle}>

    <div className='div-info'>

          <div>
            <Link to={`/home/${id}`}><h3>{name}</h3></Link>
           </div>

          <div >
            <p>weight: {weight} kg</p>
            <p>Temperament: {temperament}</p>
          </div>

    </div>


    </div>
  )
}

export default Card