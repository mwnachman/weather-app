import React, { Component } from 'react';
// import logo from '../../Assets/sun.png';
import CityChoices from '../CityChoices';
import ChosenCityWeather from '../ChosenCityWeather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Weather</h1>
        </div>
        <CityChoices />
        <ChosenCityWeather />
      </div>
    );
  }
}

export default App;
