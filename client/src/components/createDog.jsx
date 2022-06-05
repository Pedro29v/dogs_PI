import { React, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useHistory } from 'react-router-dom';
import { getTemperaments,postDogs } from "../redux/actions/actions";
import {Validation} from './Validation.jsx'

function CreateDog() {

  const dispatch = useDispatch()
  const history = useHistory()
  const temperaments= useSelector(state => state.temperaments)

  useEffect( ()=> {
    dispatch(getTemperaments())
},[dispatch])

  const [input, setInput] = useState({
    name:'',
    heightMin:'',
    heightMax:'',
    weightMin:'',
    weightMax:'',
    life_span_min:'',
    life_span_max:'',
    image:'',
    temperament:[]
  })

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })

    setErrors(Validation({
      ...input,
      [e.target.name]:e.target.value
    }))
  }

  const handleSelect = (e) => {
    if(!input.temperament.includes(e.target.value)){
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value]
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let verify = Object.keys(errors)

    if(verify.length > 0){
     return alert('You must fill in the form fields correctly')
    }

    if(input.name !== ''){

      dispatch(postDogs(input))
      history.push('/home')
      setInput({
        name:'',
        heightMin:'',
        heightMax:'',
        weightMin:'',
        weightMax:'',
        life_span_min:'',
        life_span_max:'',
        image:'',
        temperament:[]
      })
    }
    else{
      alert('Name is required')
    }
  }

  return (
    <div>
      <Link to={'/home'}><button>Back To Home</button></Link>
      <h2>Create a breed of dogs</h2>

    <form onSubmit={handleSubmit}>
      <input type='text'   onChange={(e) => handleChange(e)} name='name' value={input.name}   placeholder='type a name' />
      <strong>{errors.name}</strong>

      <input type='number' onChange={handleChange} name='heightMin' value={input.heightMin} placeholder='type a minimum height' />
      <strong>{errors.heightMin}</strong>

      <input type='number' onChange={handleChange} name='heightMax' value={input.heightMax} placeholder='type a maximum height' />
      <strong>{errors.heightMax}</strong>

      <input type='number' onChange={handleChange} name='weightMin' value={input.weightMin} placeholder='type a minimum weight' />
      <strong>{errors.weightMin}</strong>

      <input type='number' onChange={handleChange} name='weightMax' value={input.weightMax} placeholder='type a maximum weight' />
      <strong>{errors.weightMax}</strong>

      <input type='number' onChange={handleChange} name='life_span_min' value={input.life_span_min} placeholder='type a minimum life expectancy' />
      <strong>{errors.life_span_min}</strong>

      <input type='number' onChange={handleChange} name='life_span_max' value={input.life_span_max} placeholder='type a maximum life expectancy' />
      <strong>{errors.life_span_max}</strong>

      <input type='text'   onChange={handleChange} name='image' value={input.image} placeholder='type a URL' />
      <strong>{errors.image}</strong>

      <select onChange={handleSelect}>
            <option > Temperaments </option>
            {temperaments?.map(e => (
                <option key={e.id} value={e.temperament}> {e.temperament} </option>
            ))}
      </select> <br></br>
      <span>{input.temperament.map(t => t + ', ')}</span> <br></br>

    <input type='submit' value='Send' />
    </form>

    </div>
  )
}

export default CreateDog