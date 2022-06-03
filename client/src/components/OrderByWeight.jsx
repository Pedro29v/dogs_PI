import React,{useEffect} from 'react';
import { useDispatch} from 'react-redux';
import {sortWeight,getAllDogs} from '../redux/actions/actions'

function OrderByWeight({set}) {
   
    const dispatch = useDispatch();

/*     useEffect( ()=> {
      dispatch(getAllDogs())
  },[dispatch]) */
    
    const handlerWeitgh =(e)=> {
        e.preventDefault();  
        if(e.target.value ==='min' || e.target.value ==='max'){

            dispatch(sortWeight(e.target.value));
        }else{
            dispatch(getAllDogs())
        }
         set(1)
    }

  return (
    <div>
        <select onChange={handlerWeitgh}>
            <option value='all'>Order By Weight</option>
            <option value='min'> Lower Weight  </option>
            <option value='max'> Greater Weight </option>
         </select> 

    </div>
  )
}

export default OrderByWeight