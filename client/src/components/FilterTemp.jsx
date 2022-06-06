import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, filterTemperament } from "../redux/actions/actions";
import './select.css'

function FilterTemp() {

    const dispatch = useDispatch();
    const temperaments= useSelector(state => state.temperaments )

    useEffect( ()=> {
        dispatch(getTemperaments())
    },[dispatch])
    
    const handleFilterTemperaments=(e)=>{
      dispatch(filterTemperament(e.target.value))
    }

  return (
    <div className="container-select"> 
        <select onChange={e=> handleFilterTemperaments(e)}>
            <option value="All"> Temperaments </option>

            {temperaments?.map(e => (
                <option key={e.id} value={e.temperament}> {e.temperament} </option>
            ))}
               
        </select>
    </div>
  )
}

export default FilterTemp