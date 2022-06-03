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

    try {
        var json = await axios.get(`http://localhost:3001/home?name=${name}`);
        return dispatch({
            type:'FILTER_BY_NAME',
            payload: json.data
        })
    } catch (error) {
            let err = error.response.data
            return alert(err)
        }
    }
 }
  
 export const sortName = (payload) => {
    return {
        type:"SORT_NAME",
        payload,
    }
}

export const sortWeight = (payload) => {
    return {
        type:"SORT_WEIGHT",
        payload,
    }
}

export const dogAPI = (payload) => {
    return {
        type:"DOG_API",
        payload,
    }
}

export const dogDB = (payload) => {
    return {
        type:"DOG_DB",
        payload,
    }
}

export const getTemperaments = () => {

    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/home/temperament");

        return dispatch({
            type:"GET_TEMPERAMENTS",
            payload: json.data,
        })
    }
}

export function filterTemperament(payload){
    return {
        type:"FILTER_TEMPERAMENT",
        payload,
    }
}
