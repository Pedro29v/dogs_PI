import React from 'react'
import {Link} from 'react-router-dom'
import './landing.css'

function Landing() {
  return (
    <div className='primary-container'>

      <div className='second-container'>

        <div className='wrapper'>
          <h1>DOGYNHOS</h1>
          <Link to='/home'><button className='boton'>Start</button></Link>
        </div>



      </div>

    </div>
  )
}

export default Landing