import axios from 'axios';
import config from '../config';

import { createData } from '../Helpers/weather';

export const selectCity = (index, city, state) => {
  let url = config.baseUrl + city + config.midUrl + state + config.endUrl;
  return (dispatch) => {
    axios.get(url)
    .then(response => {
      localStorage.setItem('city', city);
      localStorage.setItem('state', state);
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

export const findCity = (city, state) => {
  let weatherUrl = config.baseUrl + city + config.midUrl + state + config.endUrl;
  return (dispatch) => {
    axios.get(weatherUrl)
    .then(response => {
      let location = createData(response, city, state);
      localStorage.setItem('city', city);
      localStorage.setItem('state', state);
      dispatch({
        type: 'ADD_CITY', 
        payload: {
          location: location,
          state: state,
          city: city
        }
      })
    })
    .catch(error => dispatch({
      type: 'FETCH_REJECTED', 
      payload: error
    }))     
  }
}

export const findCityByZip = (data) => {
  let url = config.url + data;
  let city = '';
  let state = '';
  return (dispatch) => {
    axios.get(url)
    .then(response => {
      city = response.data.city;
      state = response.data.state;
      let weatherUrl = config.baseUrl + city + config.midUrl + state + config.endUrl;
      return axios.get(weatherUrl)
    })
    .then(response => {
      let cityWords = city.toLowerCase().split(' ');
      for (let i = 0; i < cityWords.length; i++) {
        let cityWordLetterArray = cityWords[i].split('');
        cityWordLetterArray[0] = cityWordLetterArray[0].toUpperCase();
        cityWords[i] = cityWordLetterArray.join('');
      }
      city = cityWords.join(' ');
      let location = createData(response, city, state);
      localStorage.setItem('city', city);
      localStorage.setItem('state', state);
      dispatch({
        type: 'ADD_CITY', 
        payload: {
          location: location,
          state: state,
          city: city
        }
      })
    })
    .catch(error => dispatch({
      type: 'FETCH_REJECTED', 
      payload: error
    }))  
  }   
}



