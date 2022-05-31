import axios from 'axios'

  export function getAllDogs(){

    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/home');

        return dispatch({
            type:'GET_All_DOGS',
            payload: json.data,
        })
    }
}

export const getDogyDetail = (id) => {

    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/home/${id}`);

        return dispatch({
            type:'GET_DOGY_DETAIL',
            payload: json.data,
        })
    }
 }

 export const filterByName = (name) => {

    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/home?name=${name}`);

        return dispatch({
            type:'FILTER_BY_NAME',
            payload: json.data
        })
    }
 }
  
 export const sortName = (payload) => {
    return {
        type:"SORT_NAME",
        payload,
    }
}