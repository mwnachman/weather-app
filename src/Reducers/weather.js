import { createInitialWeatherState } from '../Helpers/weather';
import cities from '../API/cities';

const initialWeatherState = createInitialWeatherState(cities);

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
    let exists = false;
    for (let i = 0; i < state.length; i++) {
      if ( action.payload.city.toLowerCase() === state[i].city.toLowerCase() 
           && action.payload.state.toLowerCase() === state[i].state.toLowerCase() ) {
        exists = true;
      }
    } 
    if (exists) {
      return state;
    } else {
      let newLocation = action.payload.location;
      newLocation['state'] = action.payload.state;
      newLocation['city'] = action.payload.city;
      newLocation = [newLocation];
      let stateBeforeAdd = state.slice(0, 6);
      return newLocation.concat(stateBeforeAdd);
    }
  } else if ( action.type === 'FETCH_REJECTED') {
    return state;
  } else {
    return state;
  }
};


export default WeatherReducer;
