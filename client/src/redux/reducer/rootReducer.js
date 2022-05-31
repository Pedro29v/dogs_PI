//import {getAllDogs, } from ''

const initialState = {
  dogs: [],
  dogsBD:[],
  dogDetail: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_All_DOGS': return {

      ...state,
      dogs: action.payload
      
    }

    case 'GET_DOGY_DETAIL': return {
      ...state,
      dogDetail:action.payload
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

    default: return initialState
  }
};

export default rootReducer;