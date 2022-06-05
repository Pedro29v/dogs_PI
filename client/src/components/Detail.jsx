import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {getDogyDetail,resetState} from '../redux/actions/actions.js';

const Detail = (props) => {

    const ID = props.match.params.id;
    const dispatch = useDispatch();
    const {id,name,height,weight,life_span,temperament,image} = useSelector(state => state.dogDetail)

    useEffect(()=>{

        dispatch( getDogyDetail(ID))
        dispatch(resetState(resetState))
    },[dispatch,ID])

  return (
    <div key={id}>
      <Link to={`/home`}><button>Close</button></Link>
      <p>Name: {name}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Life Span: {life_span}</p>
      <p>Temperament: {temperament}</p>
      <img src={image} alt={name}></img>
    </div>
  )
}

export default Detail