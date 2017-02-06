import { createInitialWeatherState } from '../Helpers/weather';
import cities from '../API/cities';

const initialWeatherState = createInitialWeatherState(cities);

// const initialCitiesArray = createCitiesArray(cities);
// const city = localStorage.getItem('city', city);
// const state = localStorage.getItem('state', state);
// const initialWeatherState = {};
// initialWeatherState['locations'] = initialCitiesArray;
// initialWeatherState['chosenLocation'] = {city: city, state: state};

const WeatherReducer = (state =  
  initialWeatherState
, action) => {
  if ( action.type === 'SELECT_CITY' ) {
    let index = action.payload.index;
    let city = [action.payload.city];
    let stateBeforeSelect = state.slice(0, index);
    let stateAfterSelect = state.slice(index + 1); 
    return city.concat(stateBeforeSelect).concat(stateAfterSelect);
  } else if ( action.type === 'ADD_CITY' ) {
    console.log('in ADD_CITY');
    let exists = false;
    for (var i = 0; i < state.length; i++) {
      if ( action.payload.city.toLowerCase() === state[i].city.toLowerCase() 
           && action.payload.state.toLowerCase() === state[i].state.toLowerCase() ) {
        exists = true;
      }
    } 
    if (exists) {
      return state;
    } else {
      console.log('in new location add');
      let newLocation = action.payload.location;
      newLocation['state'] = action.payload.state;
      newLocation['city'] = action.payload.city;
      newLocation = [newLocation];
      let stateBeforeAdd = state.slice(0, 6);
      return newLocation.concat(stateBeforeAdd);
    }
  } else if ( action.type === 'FETCH_REJECTED') {
    console.log('in FETCH_REJECTED', action.payload);
    return state;
  } else {
    return state;
  }
};


export default WeatherReducer;
