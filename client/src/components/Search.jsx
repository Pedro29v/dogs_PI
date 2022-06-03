import React,{useState,useEffect} from 'react';
import { useDispatch} from 'react-redux';
import {filterByName} from '../redux/actions/actions'

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
    <div>
        <form onSubmit={handleSubmit}>
            <input type='search' value={nameDogy} placeholder='Search Breed' onChange={handleChange}/>
            <input type='submit' value={button} />
        </form>
    </div>
  )
}

export default Search