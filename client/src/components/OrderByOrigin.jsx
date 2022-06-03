import React from 'react'
import { useDispatch} from 'react-redux';
import {dogDB,dogAPI,getAllDogs} from '../redux/actions/actions'

function OrderByOrigin({set}) {
    const dispatch = useDispatch();

    const handlerOrigin = (e) => {
        e.preventDefault()
            if(e.target.value === 'api'){

                dispatch(dogAPI(e.target.value))
                set(1)
            }
            else if(e.target.value === 'db'){
                dispatch(dogDB(e.target.value))
                set(1)
            }
            else{
                dispatch(getAllDogs())
            }
    }

  return (
    <div>
        <select onChange={handlerOrigin}>
            <option value='all'>Order By Origin</option>
            <option value='api'> Dogs From Api  </option>
            <option value='db'> Dogs From DB </option>
        </select> 
    </div>
  )
}

export default OrderByOrigin