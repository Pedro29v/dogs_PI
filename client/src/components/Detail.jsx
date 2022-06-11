import React,{useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {getDogyDetail,resetState,deleteDogy} from '../redux/actions/actions.js';
import './detail.css'

const Detail = (props) => {

    const ID = props.match.params.id;
    const dispatch = useDispatch();
    const history = useHistory()
    const {id,name,height,weight,life_span,temperament,image} = useSelector(state => state.dogDetail)

    useEffect(()=>{
        dispatch( getDogyDetail(ID))
      return () => {
        dispatch(resetState(resetState))
      }
    },[dispatch,ID])

   const deleteDog = (e) => {
      dispatch(deleteDogy(e.target.name))
      history.push('/home')
   }


   console.log(ID.length)

  return (
    <div  key={id}>

    <div className='div-btn'>
      <Link to={`/home`}><button className='btn-backToHome'>Back</button></Link>
    </div>

    <div className='div-all'>

      <div className='div-detail'>
      {(ID.length > 4)? <input className='btn-delete' type='button' value="Delete" name={id} onClick={deleteDog} /> : null}
        <p>Name: {name}</p>
        <p>Height: {height} cm</p>
        <p>Weight: {weight} kg</p>
        <p>Life Span: {life_span} years</p>
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