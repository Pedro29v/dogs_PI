import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {filterByName} from '../redux/actions/actions'
import './navBar.css'

function Search({set}) {

const [nameDogy, setNameDogy] = useState('');
const dispatch = useDispatch();

const handleChange = (e) => {
    
    setNameDogy(e.target.value)
}

let button = '';
if(nameDogy!==''){
    button = 'Search';
}else{
    button = 'Home';
}

/* useEffect(()=>{

    dispatch( filterByName(nameDogy))
    set(1)

},[dispatch,nameDogy,set]) */

const handleSubmit = (e) => {
    e.preventDefault()

    dispatch( filterByName(nameDogy))
    set(1)

}

  return (
    <div className='container-nav'>
      <Link to='/'><button className='btn-nav'>Out</button></Link> <br/>
        <form onSubmit={handleSubmit} className='form-search'>
            <input className='input-search' type='search' value={nameDogy} placeholder='Search Breed' onChange={handleChange}/>
            <input className='btn-search' type='submit' value={button} />
        </form>
      <Link to='/dog'><button className='btn-nav'>Create Dog</button></Link>
    </div>
  )
}

export default Search