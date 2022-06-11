import { React, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useHistory } from 'react-router-dom';
import { getTemperaments,postDogs } from "../redux/actions/actions";
import {Validation} from './Validation.jsx'
import './createDog.css'

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

  const [errors, setErrors] = useState({
    name:'Type a Name',
    heightMin:'Type a minimum height',
    heightMax:'Type a maximum height',
    weightMin:'Type a minimum weight',
    weightMax:'Type a maximum weight',
    life_span_min:'Type a minimum life expectancy',
    life_span_max:'Type a maximum life expectancy',
    image:'Type a URL',
  });

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
      history.push('/home')
    }
    else{
      alert('Name is required')
    }
  }

  return (
    
    <div className="div-total">

    <div className="div-btn">
      <Link to={'/home'}><button className="btn-backToHome">Back</button></Link>
    </div>

    <div className="form-name">
    <h2>Create a breed of dogs</h2>
    </div>

    <div className="div-select">
      <select onChange={handleSelect}>
        <option > Temperaments </option>
          {temperaments?.map(e => (
        <option key={e.id} value={e.temperament}> {e.temperament} </option>
              ))}
        </select> <br></br>
        <span>{input.temperament.map(t => t + ', ')}</span> 
    </div>


    <div className="div-form">

    <form onSubmit={handleSubmit}>

    <div>
      <input type='text'   onChange={(e) => handleChange(e)} name='name' value={input.name} placeholder='Type a name' />
    </div>

    <div className="div-err">
      <strong>{errors.name}</strong>
    </div>

    <div>
      <input type='number' onChange={handleChange} name='heightMin' value={input.heightMin} placeholder='Type a minimum height'/>
    </div>
    <div className="div-err">
      <strong>{errors.heightMin}</strong> 
    </div>

    <div>
      <input type='number' onChange={handleChange} name='heightMax' value={input.heightMax} placeholder='Type a maximun height'/>
    </div>
    <div className="div-err">
      <strong>{errors.heightMax}</strong>      
    </div>

    <div>
      <input type='number' onChange={handleChange} name='weightMin' value={input.weightMin}  placeholder='Type a minimum weight'/>
    </div>
    <div className="div-err">
      <strong>{errors.weightMin}</strong> 
    </div>

    <div>
      <input type='number' onChange={handleChange} name='weightMax' value={input.weightMax} placeholder='Type a maximun weight'/>
    </div>
    <div className="div-err">
      <strong>{errors.weightMax}</strong>    
    </div>

    <div>
      <input type='number' onChange={handleChange} name='life_span_min' value={input.life_span_min} placeholder='Type a minimum life expectancy'/>
    </div>
    <div className="div-err">
      <strong>{errors.life_span_min}</strong>     
    </div>

    <div>
      <input type='number' onChange={handleChange} name='life_span_max' value={input.life_span_max} placeholder='Type a maximun life expectancy'/>
    </div>
    <div className="div-err">
      <strong>{errors.life_span_max}</strong>
    </div>

    <div>
      <input type='text'   onChange={handleChange} name='image' value={input.image} placeholder='Type a URL'/>
    </div>
    <div className="div-err">
      <strong>{errors.image}</strong>    
    </div>

    <div >
    <input className="btn-submit" type='submit' value='Send' />
    </div>

    </form>
  </div>

    </div>
  )
}

export default CreateDog