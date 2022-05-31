import React from 'react';
import {Link} from 'react-router-dom'

function navBar() {
  return (
    <div>
        <Link to='/'>Salir</Link> <br/>
        <Link to='/dog'>Crear Raza</Link>

    </div>
  )
}

export default navBar