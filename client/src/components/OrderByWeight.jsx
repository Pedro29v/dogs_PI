import React from 'react';
import { useDispatch} from 'react-redux';
import {sortWeightMin,sortWeightMax, getAllDogs} from '../redux/actions/actions'
import './select.css'

function OrderByWeight({set}) {
   
    const dispatch = useDispatch();
    
    const handlerWeitgh =(e)=> {
        e.preventDefault();  

        if(e.target.value ==='min'){
            dispatch(sortWeightMin(e.target.value));
        }
        else if(e.target.value ==='max'){
          dispatch(sortWeightMax(e.target.value));
        }
        else{
            dispatch(getAllDogs())
        }
         set(1)
    }

  return (
    <div className='container-select'>
        <select onChange={handlerWeitgh}>
            <option value='all'>Order By Weight</option>
            <option value='min'> Lower Weight  </option>
            <option value='max'> Greater Weight </option>
         </select> 

    </div>
  )
}

export default OrderByWeight