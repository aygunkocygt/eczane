import axios from 'axios';
import { FETCH_DATA } from './types';

const url = 'http://api.kodlama.net/eczane';
const urll = 'https://countrys-api.herokuapp.com';



export const fetchData =  (country) => async dispatch => {
  let changeableUrl = url ;
  
  if(country) {
    changeableUrl = `${url}/il/${country}`
  }
  else{
    changeableUrl = `${url}/all`
  }

  try{
    const res = await axios.get(changeableUrl);
  
    dispatch({ type: FETCH_DATA, payload: res.data.data });
  }
  catch (error){
    console.log(error);
  }
  
  
}

   
  export const fetchCountries = async () => {
    try {
      const { data } = await axios.get(`${urll}/countries`);
  
      return data;
  
    }
    catch(error) {
      console.log(error)
    }
  }