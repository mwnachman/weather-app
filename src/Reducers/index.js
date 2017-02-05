import { combineReducers } from 'redux';
import WeatherReducer from './weather';


const allReducers = combineReducers({
  weather: WeatherReducer
});


export default allReducers;