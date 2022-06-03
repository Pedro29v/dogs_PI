import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <Link to='/'>Salir</Link> <br/>
        <Link to='/dog'>Crear Raza</Link>
    </div>
  )
}

export default NavBar