import axios from 'axios';
import config from '../config';

import { createData } from '../Helpers/weather';
// import serializeForm from '../Helpers/form';


export const selectCity = (index, city, state) => {
  // console.log('city', index);
  let url = config.baseUrl + city + config.midUrl + state + config.endUrl;
  return (dispatch) => {
    axios.get(url)
    .then(response => {
      // console.log('response', response);
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
  // console.log('typeof city', typeof city);
  // console.log('in find city', city, state);
  let weatherUrl = config.baseUrl + city + config.midUrl + state + config.endUrl;
  return (dispatch) => {
    axios.get(weatherUrl)
    .then(response => {
      let location = createData(response, city, state);
      // console.log('location', location);
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
  console.log('data in find city', data);
  let url = config.url + data;
  let city = '';
  let state = '';
  return (dispatch) => {
    axios.get(url)
    .then(response => {
      console.log('response in find by zip', response);
      city = response.data.city;
      state = response.data.state;
      let weatherUrl = config.baseUrl + city + config.midUrl + state + config.endUrl;
      return axios.get(weatherUrl)
    })
    .then(response => {
      console.log('response in second return', response);
      // let city = 'boulder';
      // let state = 'co';
      let cityWords = city.toLowerCase().split(' ');
      for (let i = 0; i < cityWords.length; i++) {
        let cityWordLetterArray = cityWords[i].split('');
        console.log('citywordletterarray', cityWordLetterArray);
        cityWordLetterArray[0] = cityWordLetterArray[0].toUpperCase();
        console.log('citywordletterarray', cityWordLetterArray);
        cityWords[i] = cityWordLetterArray.join('');
      }
      city = cityWords.join(' ');
      console.log('city after string manipulation', city);
      let location = createData(response, city, state);
      console.log('location', location);
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



