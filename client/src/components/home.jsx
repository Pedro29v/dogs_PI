import React,{ useEffect,useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getAllDogs} from '../redux/actions/actions';
import OrderAlf from './OrderAlf';
import OrderByWeight from './OrderByWeight';
import Search from './Search';
import Card from './Card'
import OrderByOrigin from './OrderByOrigin';
import FilterTemp from './FilterTemp';
import './home.css';


function Home() {

  const dispatch = useDispatch(); 
  const dogys = useSelector(state => state.dogs);
  let [currentPage, setCurrentpage] = useState(1);
  let [dogsForPage] = useState(8);
  const lastDogy = currentPage * dogsForPage;
  const firstDogy = lastDogy - dogsForPage;
  const currentDogy =  dogys.slice(firstDogy, lastDogy);
  const pageLimit = Math.ceil(dogys.length/dogsForPage);
  const prev = () => {
    if(currentPage !== 1){
    setCurrentpage(currentPage - 1)
    }
  }

  const next = () => {
    if(currentPage < pageLimit)
   setCurrentpage(currentPage + 1)
  }

useEffect(() => {

  dispatch(getAllDogs())
 
},[dispatch])


  return (

    <div className='wrapper-home'>
    
          <Search set={setCurrentpage} />

      <div className='filters'>
          <OrderAlf />
          <OrderByOrigin set={setCurrentpage}/>
          <FilterTemp />
          <OrderByWeight set={setCurrentpage}/>
      </div>

  <div className='cards'>
    {
      currentDogy.map(e => (
        <Card key={e.id} 
          id={e.id}
          name={e.name}
          weight={e.weight}
          temperament={e.temperament}
          image={e.image }
        />
        ))
    }
  </div>

  <div className='pagination'>
    <button className='btn-pagination-left' onClick={() => prev()} >Prev </button>   
        <span>{currentPage +' de '+ pageLimit}</span>
      <button className='btn-pagination-right' onClick={() => next()} >Next </button>
  </div>
  
  </div>


  )
}

export default Home