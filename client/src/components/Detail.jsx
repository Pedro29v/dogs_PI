import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {getDogyDetail,resetState} from '../redux/actions/actions.js';
import './detail.css'

const Detail = (props) => {

    const ID = props.match.params.id;
    const dispatch = useDispatch();
    const {id,name,height,weight,life_span,temperament,image} = useSelector(state => state.dogDetail)

    useEffect(()=>{
        dispatch( getDogyDetail(ID))
        dispatch(resetState(resetState))
    },[dispatch,ID])

  return (
    <div  key={id}>

    <div className='div-btn'>
      <Link to={`/home`}><button className='btn-backToHome'>Back</button></Link>
    </div>

    <div className='div-all'>

      <div className='div-detail'>
        <p>Name: {name}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Life Span: {life_span}</p>
        <p>Temperament: {temperament}</p>  
      </div>

      <div className='img-detail'>
        <img src={image} alt={name}></img>
      </div>

    </div>

    </div>
  )
}

export default Detail