import { combineReducers } from 'redux';
import WeatherReducer from './weather';
import UserReducer from './user';


const allReducers = combineReducers({
  weather: WeatherReducer,
  user: UserReducer
});


export default allReducers;