//import {getAllDogs, } from ''

const initialState = {
  dogs: [],
  allDogys:[],
  temperaments:[],
  dogDetail: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_All_DOGS': return {

      ...state,
      dogs: action.payload,
      allDogys:action.payload
      
    }

    case 'GET_DOGY_DETAIL': return {
      ...state,
      dogDetail:action.payload
    }

    case 'RES_STATE':
      return{
          ...state,
          dogDetail: []
      }

    case 'FILTER_BY_NAME': return{
      ...state,
      dogs: action.payload
    }

    case 'SORT_NAME':           
    if( action.payload === 'desc'){
    return {
        ...state,
        dogs: [...state.dogs].sort((a, b) => (a.name < b.name ? 1 : -1)),
        }
    } 
    return{
        ...state,
        dogs: [...state.dogs].sort((a, b) => (a.name> b.name ? 1 : -1)),
        }

    case 'SORT_WEIGHT':
      
      if(action.payload === 'min'){
        return{
         ...state, 
          dogs: [...state.dogs].sort((a, b) => {


            let weightA= parseInt(a.weight.split('-')[0]) 
            let weightB= parseInt(b.weight.split('-')[0]) 
 
            if(weightA > weightB) return 1;
            if(weightA < weightB) return -1;
            else return 0;   
        })
      }
    }
    if(action.payload === 'max'){
      return{
        dogs: [...state.dogs].sort((a, b) =>{
          let weightA= parseInt(a.weight.split('-')[0]);
          let weightB= parseInt(b.weight.split('-')[0]);

          if(weightA < weightB) return 1;
          if(weightA > weightB) return -1;
          else return 0;   
        })
      }
    }
    break;

  case'DOG_API':
    return{
      ...state,
      dogs:state.allDogys.filter(e => e.id.toString().length < 4)
    }
  
    case  'DOG_DB':   
    const filterBD = state.allDogys.filter(e => e.id.length > 4)
    return{  
      ...state,
      dogs: filterBD.length > 0 ? filterBD : state.allDogys
    }
  
  case 'GET_TEMPERAMENTS':
            
    return{
        ...state,
        temperaments: action.payload 
    }

  case 'FILTER_TEMPERAMENT':
    const allBreeds = state.allDogys;
    const filterTemperament = action.payload === "All" ? allBreeds : allBreeds.filter (e => {
      if(e.temperament){
        if( e.temperament.includes(action.payload)){
            return e
          }
      }
      return false;
      })
      return{
          ...state,
          dogs: filterTemperament,
      }
  
    default: return initialState
  }

};

export default rootReducer;