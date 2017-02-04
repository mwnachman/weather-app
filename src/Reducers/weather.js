import { createInitialWeatherState } from '../Helpers/weather';
import cities from '../API/cities';

const initialWeatherState = createInitialWeatherState(cities);

const WeatherReducer = (state =  
  initialWeatherState
, action) => {
  if ( action.type === 'SELECT_CITY' ) {
    let index = action.payload.index;
    let city = action.payload.city;
    let stateBeforeSquare = state.slice(0, index);
    let stateAfterSquare = state.slice(index + 1); 
    return stateBeforeSquare.concat(city).concat(stateAfterSquare);
  // } else if ( action.type === 'COMPUTER_MOVE' ) {
  //   if (action.payload.move === undefined) {
  //     return state;
  //   }
  //   var boardFull = true;
  //   for (let i = 0; i < 9; i++) {
  //     if (state[i] === null) {
  //       boardFull = false;
  //     }
  //   }
  //   if (boardFull === true) {
  //     return state;
  //   } else {
  //     let player = action.payload.player;
  //     let square = action.payload.move;
  //     let stateBeforeSquare = state.slice(0, square);
  //     let stateAfterSquare = state.slice(square + 1); 
  //     return stateBeforeSquare.concat(player).concat(stateAfterSquare);
  //   }
  } else {
    return state;
  }
};


export default WeatherReducer;
