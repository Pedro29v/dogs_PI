import { React, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getTemperaments } from "../redux/actions/actions";

function CreateDog() {

  const dispatch = useDispatch()
  const temperaments= useSelector(state => state.temperaments )

  useEffect( ()=> {
    dispatch(getTemperaments())
},[dispatch])

  const [input,setInput] = useState({
    name:'',
    heightMin:'',
    heightMax:'',
    weighttMin:'',
    weightMax:'',
    life_span_min:'',
    life_span_max:'',
    image:'',
    teperament:[]
  })

  return (
    <div>
      <Link to={`/home`}><button>Back To Home</button></Link>
      <h2>Create a breed of dogs</h2>

    <form>
      <input type='text'    placeholder='type a name' />
      <input type='number'  placeholder='type a minimum height' />
      <input type='number'  placeholder='type a maximum height' />
      <input type='number'  placeholder='type a minimum weight' />
      <input type='number'  placeholder='type a maximum weight' />
      <input type='number'  placeholder='type a minimum life expectancy' />
      <input type='number'  placeholder='type a maximum life expectancy' />
      <input type='text'    placeholder='type a URL' />
      <select >
            <option value="All"> Temperaments </option>

            {temperaments?.map(e => (
                <option key={e.id} value={e.temperament}> {e.temperament} </option>
            ))}
      </select>
      <input type='submit' value='Enter' />
    </form>

    </div>
  )
}

export default CreateDog