import axios from 'axios';
import config from '../config';

import { createData } from '../Helpers/weather';


export const selectCity = (index, city, state) => {
  // console.log('city', index);
  let url = config.baseUrl + city + config.midUrl + state + config.endUrl;
  return (dispatch) => {
    axios.get(url)
    .then(response => {
      // console.log('response', response);
      let data = createData(response, city, state);
      dispatch({
      type: 'SELECT_CITY',
      payload: {
        index: index,
        city: data
        }
      })
    })
    .catch(error => dispatch({
      type: 'FETCH_REJECTED',
      payload: error
    })) 
  }
}

